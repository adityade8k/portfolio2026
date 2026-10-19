import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import { InfiniteGrid } from '../src/core/infiniteGrid.js';

test('grid pieces rise and sink in place, keeping their outlines aligned and surrounding blocks still', async (t) => {
  const frames = [];
  const originalFrame = globalThis.requestAnimationFrame;
  globalThis.requestAnimationFrame = (callback) => frames.push(callback);
  t.after(() => {
    if (originalFrame) globalThis.requestAnimationFrame = originalFrame;
    else delete globalThis.requestAnimationFrame;
  });
  const grid = new InfiniteGrid();
  const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 500);
  camera.position.set(3, 24, 15);
  camera.lookAt(0, 0, 0);
  const reserved = [{ minX: -3.6, maxX: 3.6, minZ: -5, maxZ: 5 }];
  grid.setExclusions(reserved);

  function matrixAt(index) {
    const matrix = new THREE.Matrix4();
    grid.blocks.getMatrixAt(index, matrix);
    return matrix.elements;
  }

  for (const filling of [true, false]) {
    const start = performance.now();
    const animation = grid.animateExclusions(filling ? [] : reserved, { duration: 1000 });
    grid.update(camera);
    const firstMoving = grid.staticBlockCount;
    assert.ok(firstMoving > 0 && firstMoving < grid.blocks.count);
    const stationary = matrixAt(0);
    const initial = matrixAt(firstMoving);
    const block = grid.renderedBlocks[firstMoving];
    if (filling) assert.ok(initial[13] + initial[5] / 2 < 0, 'refilling blocks begin below the floor');
    else assert.ok(Math.abs(initial[5] - block.height) < 1e-6);

    frames.shift()(start + 500);
    grid.update(camera);
    const middle = matrixAt(firstMoving);
    assert.deepEqual(matrixAt(0), stationary, 'surrounding grid stays still');
    assert.equal(middle[12], initial[12]);
    assert.equal(middle[14], initial[14]);
    assert.ok(middle[5] > block.height * 0.4 && middle[5] < block.height * 0.6);
    assert.equal(grid.offsets.getY(firstMoving), middle[13]);
    assert.equal(grid.sizes.getY(firstMoving), middle[5]);

    frames.shift()(start + 1100);
    await animation;
    grid.update(camera);
    assert.deepEqual(grid.gridTransitions, []);
    assert.deepEqual(grid.exclusions, filling ? [] : reserved);
    assert.equal(grid.blocks.count, grid.edges.geometry.instanceCount);
  }
});


test('new destinations clear locally and multiple passed projects refill independently without collisions', async (t) => {
  const frames = [];
  const originalFrame = globalThis.requestAnimationFrame;
  globalThis.requestAnimationFrame = (callback) => frames.push(callback);
  t.after(() => {
    if (originalFrame) globalThis.requestAnimationFrame = originalFrame;
    else delete globalThis.requestAnimationFrame;
  });
  const grid = new InfiniteGrid();
  const camera = new THREE.OrthographicCamera(-25, 25, 20, -20, 0.1, 500);
  camera.position.set(3, 35, 15);
  camera.lookAt(0, 0, 0);
  const regions = [-10, 0, 10].map((x) => ({ minX: x - 3, maxX: x + 3, minZ: -4, maxZ: 4 }));
  const overlaps = (block, region) => block.x - block.width / 2 < region.maxX
    && block.x + block.width / 2 > region.minX
    && block.z - block.depth / 2 < region.maxZ && block.z + block.depth / 2 > region.minZ;
  const advance = (time) => frames.splice(0).forEach((callback) => callback(time));
  grid.setExclusions(regions.slice(0, 2));
  const start = performance.now();
  const clearing = grid.animateExclusions(regions, { duration: 1000 });
  grid.update(camera);
  assert.equal(grid.gridTransitions.length, 1);
  assert.deepEqual(grid.gridTransitions[0].regions, [regions[2]]);
  assert.ok(grid.renderedBlocks.every((block) => !regions.slice(0, 2).some((region) => overlaps(block, region))),
    'already raised projects stay clear of grid blocks');
  advance(start + 1100);
  await clearing;

  const refillStart = performance.now();
  const first = grid.animateExclusions(regions.slice(0, 2), { duration: 500 });
  const second = grid.animateExclusions(regions.slice(0, 1), { duration: 1000 });
  grid.update(camera);
  assert.equal(grid.gridTransitions.length, 2);
  assert.ok(grid.renderedBlocks.every((block) => !overlaps(block, regions[0])));
  const moving = grid.renderedBlocks.filter((block) => block.transition);
  const stationary = grid.renderedBlocks.filter((block) => !block.transition);
  assert.ok(moving.length > 0);
  assert.ok(stationary.every((block) => !regions.some((region) => overlaps(block, region))),
    'no static grid duplicates an animated region');
  advance(refillStart + 600);
  await first;
  grid.update(camera);
  assert.equal(grid.gridTransitions.length, 1, 'one refill finishes without stopping the other');
  assert.deepEqual(grid.exclusions, regions.slice(0, 1));
  assert.ok(grid.renderedBlocks.some((block) => !block.transition && overlaps(block, regions[2])));
  advance(refillStart + 1100);
  await second;
  grid.update(camera);
  assert.deepEqual(grid.gridTransitions, []);
  assert.ok(grid.renderedBlocks.some((block) => overlaps(block, regions[1])));
  assert.ok(grid.renderedBlocks.every((block) => !overlaps(block, regions[0])));
  assert.equal(grid.blocks.count, grid.edges.geometry.instanceCount);
});
