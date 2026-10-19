import * as THREE from 'three';

const cellWidth = 1.2;
const cellDepth = 1;
const gap = 0.08;
const minimumBlockSize = 0.18;
const capacity = 16384;
const patterns = [
  [[0, 0, 2, 2]],
  [[0, 0, 1, 2], [1, 0, 1, 2]],
  [[0, 0, 2, 1], [0, 1, 2, 1]],
  [[0, 0, 1, 1], [1, 0, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1]],
  [[0, 0, 2, 1], [0, 1, 1, 1], [1, 1, 1, 1]],
];

function noise(x, z, seed = 0) {
  const value = Math.sin(x * 127.1 + z * 311.7 + seed * 74.7) * 43758.5453;
  return value - Math.floor(value);
}

export function getBlockFootprints(groups) {
  const footprints = [];
  const indicatorRows = new Map();
  const compositions = new Map();
  const position = new THREE.Vector3();
  for (const group of groups.filter(Boolean)) {
    group.updateMatrixWorld(true);
    // Hidden projects leave their space available to the continuous grid.
    // A visible tile still reserves its footprint while its blocks emerge.
    group.traverseVisible((child) => {
      const block = child.userData.blockData;
      if (!block || !child.userData.mesh) return;
      child.getWorldPosition(position);
      const footprint = {
        minX: position.x - (block.worldW + (block.gapX ?? gap)) / 2,
        maxX: position.x + (block.worldW + (block.gapX ?? gap)) / 2,
        minZ: position.z - (block.worldD + gap) / 2,
        maxZ: position.z + (block.worldD + gap) / 2,
      };
      if (!block.outsideProject) {
        // The central tile is a single reserved area. Keeping it whole also
        // lets the original grid cells refill it without thin internal slices.
        const composition = compositions.get(child.parent);
        if (composition) {
          composition.minX = Math.min(composition.minX, footprint.minX);
          composition.maxX = Math.max(composition.maxX, footprint.maxX);
          composition.minZ = Math.min(composition.minZ, footprint.minZ);
          composition.maxZ = Math.max(composition.maxZ, footprint.maxZ);
        } else {
          compositions.set(child.parent, footprint);
        }
      } else if (block.subtype === 'pageIndicator') {
        // Reserve the whole indicator area, including all rows, so the grid
        // cannot rise through later rows or split into narrow internal slivers.
        const row = indicatorRows.get(child.parent);
        if (row) {
          row.minX = Math.min(row.minX, footprint.minX);
          row.maxX = Math.max(row.maxX, footprint.maxX);
          row.minZ = Math.min(row.minZ, footprint.minZ);
          row.maxZ = Math.max(row.maxZ, footprint.maxZ);
        } else {
          indicatorRows.set(child.parent, footprint);
        }
      } else {
        footprints.push(footprint);
      }
    });
  }
  return [...compositions.values(), ...footprints, ...indicatorRows.values()];
}

function overlaps(a, b) {
  return a.minX < b.maxX && a.maxX > b.minX && a.minZ < b.maxZ && a.maxZ > b.minZ;
}

function subtractRectangle(rect, cutout) {
  if (!overlaps(rect, cutout)) return [rect];
  const minX = Math.max(rect.minX, cutout.minX);
  const maxX = Math.min(rect.maxX, cutout.maxX);
  const minZ = Math.max(rect.minZ, cutout.minZ);
  const maxZ = Math.min(rect.maxZ, cutout.maxZ);
  return [
    { ...rect, maxX: minX },
    { ...rect, minX: maxX },
    { minX, maxX, minZ: rect.minZ, maxZ: minZ },
    { minX, maxX, minZ: maxZ, maxZ: rect.maxZ },
  ].filter((piece) => piece.maxX - piece.minX > gap && piece.maxZ - piece.minZ > gap);
}

function intersectRegions(rect, regions) {
  let remaining = [rect];
  const inside = [];
  for (const region of regions) {
    remaining = remaining.flatMap((piece) => {
      if (!overlaps(piece, region)) return [piece];
      inside.push({
        minX: Math.max(piece.minX, region.minX), maxX: Math.min(piece.maxX, region.maxX),
        minZ: Math.max(piece.minZ, region.minZ), maxZ: Math.min(piece.maxZ, region.maxZ),
      });
      return subtractRectangle(piece, region);
    });
  }
  return inside;
}

function subtractRegions(regions, cutouts) {
  return cutouts.reduce((remaining, cutout) =>
    remaining.flatMap((rect) => subtractRectangle(rect, cutout)), regions);
}

export function createGridBlocks({ minX, maxX, minZ, maxZ }, exclusions = [], inclusions = null) {
  const clippedPieces = [];
  for (let z = minZ; z <= maxZ; z++) {
    for (let x = minX; x <= maxX; x++) {
      const pattern = patterns[Math.floor(noise(x, z) * patterns.length)];
      const patch = {
        minX: x * 2 * cellWidth, maxX: (x + 1) * 2 * cellWidth,
        minZ: z * 2 * cellDepth, maxZ: (z + 1) * 2 * cellDepth,
      };
      const cutouts = exclusions.filter((rect) => overlaps(patch, rect));
      const included = inclusions?.filter((rect) => overlaps(patch, rect));
      if (included && !included.length) continue;
      pattern.forEach(([dx, dz, width, depth], index) => {
        let pieces = [{
          minX: (x * 2 + dx) * cellWidth,
          maxX: (x * 2 + dx + width) * cellWidth,
          minZ: (z * 2 + dz) * cellDepth,
          maxZ: (z * 2 + dz + depth) * cellDepth,
        }];
        if (included) pieces = intersectRegions(pieces[0], included);
        for (const cutout of cutouts) {
          pieces = pieces.flatMap((piece) => subtractRectangle(piece, cutout));
          if (!pieces.length) break;
        }
        clippedPieces.push(...pieces.map((piece) => ({
          ...piece,
          height: 0.3 + noise(x, z, index + 1) * 0.45,
        })));
      });
    }
  }
  // A narrow opening can cross a pattern boundary. Join its small fragments
  // before insetting so the half-row behind page bars does not lose a strip.
  const pieces = joinSmallPieces(clippedPieces);
  return pieces.filter((piece) =>
    piece.maxX - piece.minX - gap >= minimumBlockSize - 1e-8
    && piece.maxZ - piece.minZ - gap >= minimumBlockSize - 1e-8,
  ).map((piece) => ({
    x: (piece.minX + piece.maxX) / 2,
    z: (piece.minZ + piece.maxZ) / 2,
    width: Math.max(minimumBlockSize, piece.maxX - piece.minX - gap),
    depth: Math.max(minimumBlockSize, piece.maxZ - piece.minZ - gap),
    height: piece.height,
  }));
}

function joinSmallPieces(pieces) {
  const minimumSpan = minimumBlockSize + gap;
  for (let index = 0; index < pieces.length; index++) {
    const piece = pieces[index];
    const thinX = piece.maxX - piece.minX < minimumSpan - 1e-8;
    const thinZ = piece.maxZ - piece.minZ < minimumSpan - 1e-8;
    if (!thinX && !thinZ) continue;
    const axis = thinZ ? 'Z' : 'X';
    const across = thinZ ? 'X' : 'Z';
    for (let otherIndex = 0; otherIndex < pieces.length; otherIndex++) {
      if (index === otherIndex) continue;
      const other = pieces[otherIndex];
      const touches = Math.abs(piece[`max${axis}`] - other[`min${axis}`]) < 1e-8
        || Math.abs(other[`max${axis}`] - piece[`min${axis}`]) < 1e-8;
      if (!touches) continue;
      const low = Math.max(piece[`min${across}`], other[`min${across}`]);
      const high = Math.min(piece[`max${across}`], other[`max${across}`]);
      const near = Math.min(piece[`min${axis}`], other[`min${axis}`]);
      const far = Math.max(piece[`max${axis}`], other[`max${axis}`]);
      if (high - low < minimumSpan - 1e-8 || far - near < minimumSpan - 1e-8) continue;
      // Do not repair one thin fragment by creating a new thin neighbor. This
      // also makes every join reduce the total area still needing repair.
      const remainingSpans = [low - other[`min${across}`], other[`max${across}`] - high];
      if (remainingSpans.some((span) => span > 1e-8 && span < minimumSpan - 1e-8)) continue;
      const joined = {
        ...other,
        [`min${across}`]: low, [`max${across}`]: high,
        [`min${axis}`]: near, [`max${axis}`]: far,
      };
      const remainders = [piece, other].flatMap((rect) => [
        { ...rect, [`max${across}`]: low },
        { ...rect, [`min${across}`]: high },
      ]).filter((rect) => rect.maxX - rect.minX > gap && rect.maxZ - rect.minZ > gap);
      pieces.splice(Math.max(index, otherIndex), 1);
      pieces.splice(Math.min(index, otherIndex), 1);
      pieces.push(joined, ...remainders);
      index = -1;
      break;
    }
  }
  return pieces;
}

export class InfiniteGrid extends THREE.Group {
  constructor() {
    super();
    this.name = 'infinite-background-grid';
    this.lastBounds = '';
    this.exclusions = [];
    this.gridTransitions = [];
    this.renderedBlocks = [];
    this.staticBlockCount = 0;
    this.lastProgress = null;
    this.raycaster = new THREE.Raycaster();
    this.ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.corner = new THREE.Vector2();
    this.intersection = new THREE.Vector3();
    this.transform = new THREE.Object3D();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    this.blocks = new THREE.InstancedMesh(geometry, new THREE.MeshStandardMaterial({
      color: '#f7f3e8', roughness: 0.82, metalness: 0,
      polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1,
    }), capacity);
    this.blocks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.blocks.castShadow = true;
    this.blocks.receiveShadow = true;
    this.blocks.frustumCulled = false;
    this.blocks.count = 0;
    this.add(this.blocks);

    const edgeGeometry = new THREE.InstancedBufferGeometry();
    const unitEdges = new THREE.EdgesGeometry(geometry);
    edgeGeometry.setAttribute('position', unitEdges.getAttribute('position'));
    this.offsets = new THREE.InstancedBufferAttribute(new Float32Array(capacity * 3), 3)
      .setUsage(THREE.DynamicDrawUsage);
    this.sizes = new THREE.InstancedBufferAttribute(new Float32Array(capacity * 3), 3)
      .setUsage(THREE.DynamicDrawUsage);
    edgeGeometry.setAttribute('instanceOffset', this.offsets);
    edgeGeometry.setAttribute('instanceSize', this.sizes);
    edgeGeometry.instanceCount = 0;
    this.edges = new THREE.LineSegments(edgeGeometry, new THREE.ShaderMaterial({
      vertexShader: `
        attribute vec3 instanceOffset;
        attribute vec3 instanceSize;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position * instanceSize + instanceOffset, 1.0);
        }
      `,
      fragmentShader: 'void main() { gl_FragColor = vec4(vec3(0.067), 1.0); }',
      toneMapped: false,
    }));
    this.edges.frustumCulled = false;
    this.edges.renderOrder = 2;
    this.add(this.edges);
  }

  setExclusions(exclusions) {
    this.exclusions = exclusions;
    this.lastBounds = '';
  }

  animateExclusions(exclusions, { duration = 360 } = {}) {
    const changes = [
      { regions: subtractRegions(this.exclusions, exclusions), filling: true, progress: 0 },
      { regions: subtractRegions(exclusions, this.exclusions), filling: false, progress: 1 },
    ].filter((change) => change.regions.length);
    for (const change of changes) {
      if (this.gridTransitions.some((active) => active.regions.some((region) =>
        change.regions.some((changed) => overlaps(region, changed))))) {
        throw new Error('Wait for this grid area to finish animating before changing it again');
      }
    }
    // Commit the requested reservations immediately so concurrent refills can
    // update other tiles without overwriting one another's final footprints.
    this.setExclusions(exclusions);
    this.gridTransitions.push(...changes);
    return Promise.all(changes.map((transition) => this.animateGridRegion(transition, duration)));
  }

  animateGridRegion(transition, duration) {
    const start = performance.now();
    return new Promise((resolve) => {
      const tick = (now) => {
        const t = Math.min(1, Math.max(0, (now - start) / Math.max(1, duration)));
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        transition.progress = transition.filling ? eased : 1 - eased;
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          this.gridTransitions = this.gridTransitions.filter((active) => active !== transition);
          this.lastBounds = '';
          resolve();
        }
      };
      requestAnimationFrame(tick);
    });
  }

  update(camera) {
    camera.updateMatrixWorld();
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const x of [-1, 1]) {
      for (const y of [-1, 1]) {
        this.raycaster.setFromCamera(this.corner.set(x, y), camera);
        if (!this.raycaster.ray.intersectPlane(this.ground, this.intersection)) continue;
        minX = Math.min(minX, this.intersection.x);
        maxX = Math.max(maxX, this.intersection.x);
        minZ = Math.min(minZ, this.intersection.z);
        maxZ = Math.max(maxZ, this.intersection.z);
      }
    }
    if (!Number.isFinite(minX)) return;

    // Generate beyond all four viewport corners, before those cells can be seen.
    const bounds = {
      minX: Math.floor(minX / (cellWidth * 2)) - 3,
      maxX: Math.ceil(maxX / (cellWidth * 2)) + 3,
      minZ: Math.floor(minZ / (cellDepth * 2)) - 3,
      maxZ: Math.ceil(maxZ / (cellDepth * 2)) + 3,
    };
    const key = JSON.stringify(bounds);
    if (key !== this.lastBounds) {
      this.lastBounds = key;
      const movingRegions = this.gridTransitions.flatMap((transition) => transition.regions);
      const stationary = createGridBlocks(bounds, [...this.exclusions, ...movingRegions]);
      const moving = this.gridTransitions.flatMap((transition) =>
        createGridBlocks(bounds, [], transition.regions).map((block) => ({ ...block, transition })));
      this.renderedBlocks = [...stationary, ...moving];
      this.staticBlockCount = stationary.length;
      this.lastProgress = null;
    }
    const progress = this.gridTransitions.map((transition) => transition.progress).join(',');
    if (progress === this.lastProgress) return;
    this.lastProgress = progress;
    const blocks = this.renderedBlocks;
    if (blocks.length > capacity) throw new Error('Background grid exceeds its rendering capacity');

    blocks.forEach((block, index) => {
      const amount = block.transition?.progress ?? 1;
      const height = block.height * Math.max(0.001, amount);
      const hiddenY = -0.18 - block.height * 0.001 / 2;
      const y = amount === 1 ? block.height / 2 : THREE.MathUtils.lerp(hiddenY, block.height / 2, amount);
      this.transform.position.set(block.x, y, block.z);
      this.transform.scale.set(block.width, height, block.depth);
      this.transform.updateMatrix();
      this.blocks.setMatrixAt(index, this.transform.matrix);
      this.offsets.setXYZ(index, block.x, y, block.z);
      this.sizes.setXYZ(index, block.width, height, block.depth);
    });
    this.blocks.count = blocks.length;
    this.blocks.instanceMatrix.needsUpdate = true;
    this.edges.geometry.instanceCount = blocks.length;
    this.offsets.needsUpdate = true;
    this.sizes.needsUpdate = true;
  }
}
