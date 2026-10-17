import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import { createGridBlocks, InfiniteGrid } from '../src/core/infiniteGrid.js';

test('grid cells keep their positions and heights when the viewport moves away and returns', () => {
  const small = createGridBlocks({ minX: -3, maxX: 2, minZ: -2, maxZ: 3 });
  const large = createGridBlocks({ minX: -8, maxX: 8, minZ: -8, maxZ: 8 });
  const byPosition = new Map(large.map((block) => [`${block.x},${block.z}`, block]));
  small.forEach((block) => assert.deepEqual(byPosition.get(`${block.x},${block.z}`), block));
  assert.ok(small.every((block) => block.height < 0.9));
});

test('every grid patch is tiled completely, apart from the intentional narrow gaps', () => {
  for (let z = -5; z <= 5; z++) {
    for (let x = -5; x <= 5; x++) {
      const blocks = createGridBlocks({ minX: x, maxX: x, minZ: z, maxZ: z });
      const area = blocks.reduce((total, block) => total + (block.width + 0.08) * (block.depth + 0.08), 0);
      assert.ok(Math.abs(area - 4.8) < 0.000001);
    }
  }
});

test('the grid covers every viewport corner across phone, desktop, and the full gallery journey', () => {
  const grid = new InfiniteGrid();
  const ray = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const intersection = new THREE.Vector3();
  for (const aspect of [390 / 844, 613 / 724, 1440 / 1000, 3440 / 1440]) {
    const size = Math.max(12.8, 12.4 / aspect);
    const camera = new THREE.OrthographicCamera(-size * aspect / 2, size * aspect / 2, size / 2, -size / 2, 0.1, 500);
    for (const x of [0, 20, 50, 97]) {
      const target = new THREE.Vector3(x, 0.6, -x * 0.577);
      camera.position.copy(target).add(new THREE.Vector3(3, 8, 5));
      camera.lookAt(target);
      grid.update(camera);
      const bounds = JSON.parse(grid.lastBounds);
      for (const nx of [-1, 1]) for (const ny of [-1, 1]) {
        ray.setFromCamera(new THREE.Vector2(nx, ny), camera);
        ray.ray.intersectPlane(plane, intersection);
        assert.ok(intersection.x > bounds.minX * 2.4 && intersection.x < (bounds.maxX + 1) * 2.4);
        assert.ok(intersection.z > bounds.minZ * 2 && intersection.z < (bounds.maxZ + 1) * 2);
      }
      assert.ok(grid.blocks.count > 0);
      assert.equal(grid.edges.geometry.instanceCount, grid.blocks.count);
    }
  }
});
