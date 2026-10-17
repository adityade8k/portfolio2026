import * as THREE from 'three';

const cellWidth = 1.2;
const cellDepth = 1;
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

export function createGridBlocks({ minX, maxX, minZ, maxZ }) {
  const blocks = [];
  for (let z = minZ; z <= maxZ; z++) {
    for (let x = minX; x <= maxX; x++) {
      const pattern = patterns[Math.floor(noise(x, z) * patterns.length)];
      pattern.forEach(([dx, dz, width, depth], index) => {
        blocks.push({
          x: (x * 2 + dx + width / 2) * cellWidth,
          z: (z * 2 + dz + depth / 2) * cellDepth,
          width: width * cellWidth - 0.08,
          depth: depth * cellDepth - 0.08,
          // Stay below every project block, including its decorative fillers.
          height: 0.3 + noise(x, z, index + 1) * 0.45,
        });
      });
    }
  }
  return blocks;
}

export class InfiniteGrid extends THREE.Group {
  constructor() {
    super();
    this.name = 'infinite-background-grid';
    this.lastBounds = '';
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
    if (key === this.lastBounds) return;
    this.lastBounds = key;
    const blocks = createGridBlocks(bounds);
    if (blocks.length > capacity) throw new Error('Background grid exceeds its rendering capacity');

    blocks.forEach((block, index) => {
      this.transform.position.set(block.x, block.height / 2, block.z);
      this.transform.scale.set(block.width, block.height, block.depth);
      this.transform.updateMatrix();
      this.blocks.setMatrixAt(index, this.transform.matrix);
      this.offsets.setXYZ(index, block.x, block.height / 2, block.z);
      this.sizes.setXYZ(index, block.width, block.height, block.depth);
    });
    this.blocks.count = blocks.length;
    this.blocks.instanceMatrix.needsUpdate = true;
    this.edges.geometry.instanceCount = blocks.length;
    this.offsets.needsUpdate = true;
    this.sizes.needsUpdate = true;
  }
}
