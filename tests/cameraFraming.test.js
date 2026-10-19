import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import * as THREE from 'three';
import {
  DEFAULT_CAMERA,
  getCameraDevice,
  getViewportCameraFrame,
  getResizedViewSize,
  getSceneCameraOffset,
} from '../src/core/cameraFraming.js';
import { generateLayout } from '../src/core/layoutEngine.js';
import { InfiniteGrid } from '../src/core/infiniteGrid.js';
import { getProjectTilePosition } from '../src/core/projectGallery.js';
import { getProjectNavigation } from '../src/core/projectNavigation.js';

const { pages } = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));
const portraitSizes = [
  [320, 480], [320, 568], [360, 640], [360, 800], [375, 667],
  [390, 844], [393, 852], [412, 915], [430, 932], [440, 956],
  [480, 960], [600, 960], [768, 1024], [820, 1180],
];
const sizes = [...portraitSizes, ...portraitSizes.map(([width, height]) => [height, width])];

function createCamera(width, height, origin, config = DEFAULT_CAMERA) {
  const frame = getViewportCameraFrame(width, height, config);
  const size = frame.viewSize;
  const target = origin.clone().add(frame.targetOffset);
  const aspect = width / height;
  const camera = new THREE.OrthographicCamera(-size * aspect / 2, size * aspect / 2, size / 2, -size / 2, 0.1, 500);
  camera.zoom = config.zoom;
  camera.position.copy(target).add(getSceneCameraOffset(config));
  camera.lookAt(target);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
  return camera;
}

test('the default camera uses the requested 40° polar and 30° azimuth angles', () => {
  const spherical = new THREE.Spherical().setFromVector3(getSceneCameraOffset(DEFAULT_CAMERA));
  assert.ok(Math.abs(THREE.MathUtils.radToDeg(spherical.phi) - 40) < 1e-10);
  assert.ok(Math.abs(THREE.MathUtils.radToDeg(spherical.theta) - 30) < 1e-10);
});

test('portrait framing is exactly 5% closer than the previous edge fit', () => {
  for (const [width, height] of portraitSizes) {
    const camera = createCamera(width, height, new THREE.Vector3());
    const topRight = new THREE.Vector3(3.56, 1.9, -4.96).project(camera);
    const bottomLeft = new THREE.Vector3(-3.56, 1.9, 4.96).project(camera);
    const edge = (width - 8) / width * 1.05;
    assert.ok(Math.abs(topRight.x - edge) < 1e-8);
    assert.ok(Math.abs(bottomLeft.x + edge) < 1e-8);
  }
});

test('phones retain the mobile camera in both orientations, including the former 768px breakpoint', () => {
  for (const [width, height] of portraitSizes) {
    assert.equal(getCameraDevice(width), 'mobile');
    if (height <= 1024) assert.equal(getCameraDevice(height), 'mobile');
    assert.equal(getCameraDevice(height, true), 'mobile');
  }
  assert.equal(getCameraDevice(1440), 'desktop');
  assert.equal(getCameraDevice(1366, true), 'mobile');
});

for (const [width, height] of sizes) {
  test(`${width}×${height}: the base fit contains every tile and control before the requested extra zoom`, () => {
    for (const page of pages.filter((page) => ['home', 'about'].includes(page.id) || page.template === 'projectDetail')) {
      const navigation = getProjectNavigation(pages, page.id);
      const offset = navigation ? getProjectTilePosition(navigation.index) : new THREE.Vector3();
      const camera = createCamera(width, height, offset, { ...DEFAULT_CAMERA, framingZoom: 1 });
      // Include varied generated heights and filler arrangements.
      for (let sample = 0; sample < 3; sample++) {
        const blocks = generateLayout({ ...page, projectNavigation: navigation }, { isMobile: true, fillerRings: 0 });
        for (const block of blocks) {
          for (const sideX of [-1, 1]) for (const sideZ of [-1, 1]) for (const y of [0, block.height + 0.05]) {
            const projected = new THREE.Vector3(
              offset.x + block.worldX + sideX * block.worldW / 2,
              y,
              offset.z + block.worldZ + sideZ * block.worldD / 2,
            ).project(camera);
            const label = `${page.id}: ${block.id}`;
            assert.ok((1 - Math.abs(projected.x)) * width / 2 >= 3.99, `${label} horizontal margin`);
            assert.ok((1 - Math.abs(projected.y)) * height / 2 >= 3.99, `${label} vertical margin`);
            assert.ok(projected.z > -1 && projected.z < 1, `${label} camera clipping`);
          }
        }
      }
    }
  });
}

test('resizing in either direction restores the original framing and preserves reading zoom', () => {
  for (const readingScale of [1, 0.75]) {
    const initialSize = getViewportCameraFrame(393, 852).viewSize;
    let previousSize = initialSize;
    let viewSize = initialSize * readingScale;
    for (const [width, height] of [...sizes, [393, 852]]) {
      const nextSize = getViewportCameraFrame(width, height).viewSize;
      viewSize = getResizedViewSize(viewSize, previousSize, nextSize);
      previousSize = nextSize;
      assert.ok(Math.abs(viewSize / nextSize - readingScale) < 1e-10);
    }
    assert.ok(Math.abs(viewSize - initialSize * readingScale) < 1e-10);
  }
});

test('the raised background grid remains in front of the camera and fills every mobile viewport corner', () => {
  const grid = new InfiniteGrid();
  const raycaster = new THREE.Raycaster();
  const point = new THREE.Vector3();
  for (const [width, height] of sizes) {
    for (const index of [0, 10]) {
      const target = getProjectTilePosition(index);
      const camera = createCamera(width, height, target);
      grid.update(camera);
      const bounds = JSON.parse(grid.lastBounds);
      for (const elevation of [0, 0.85]) {
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -elevation);
        for (const x of [-1, 1]) for (const y of [-1, 1]) {
          raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
          assert.ok(raycaster.ray.intersectPlane(plane, point), `${width}×${height}: grid corner behind the camera`);
          assert.ok(point.x > bounds.minX * 2.4 && point.x < (bounds.maxX + 1) * 2.4);
          assert.ok(point.z > bounds.minZ * 2 && point.z < (bounds.maxZ + 1) * 2);
          const depth = point.clone().project(camera).z;
          assert.ok(depth > -1 && depth < 1, `${width}×${height}: grid corner clipped`);
        }
      }
      assert.ok(grid.blocks.count > 0);
      assert.equal(grid.edges.geometry.instanceCount, grid.blocks.count);
    }
  }
  grid.traverse((child) => {
    child.geometry?.dispose();
    child.material?.dispose();
  });
});
