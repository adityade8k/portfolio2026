import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import * as THREE from 'three';
import { generateLayout, TILE_GRID } from '../src/core/layoutEngine.js';
import { createProjectGallery, getProjectTilePosition } from '../src/core/projectGallery.js';
import { getProjectNavigation } from '../src/core/projectNavigation.js';
import { createGridBlocks, getBlockFootprints, InfiniteGrid } from '../src/core/infiniteGrid.js';

const { pages } = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));
const intersects = (a, b) => a.minX < b.maxX - 1e-8 && a.maxX > b.minX + 1e-8
  && a.minZ < b.maxZ - 1e-8 && a.maxZ > b.minZ + 1e-8;
const gridRect = (block) => ({
  minX: block.x - block.width / 2, maxX: block.x + block.width / 2,
  minZ: block.z - block.depth / 2, maxZ: block.z + block.depth / 2,
});

function createTile(page, projectNavigation) {
  const tile = new THREE.Group();
  for (const data of generateLayout({ ...page, projectNavigation }, { fillerRings: 0 })) {
    const block = new THREE.Group();
    block.position.set(data.worldX, 0, data.worldZ);
    block.userData = { blockData: data, mesh: new THREE.Object3D() };
    tile.add(block);
  }
  return tile;
}

test('Back and the navigation row adjoin the project with only the normal block seams', () => {
  for (const page of pages.filter((page) => getProjectNavigation(pages, page.id))) {
    const layout = generateLayout({ ...page, projectNavigation: getProjectNavigation(pages, page.id) }, { fillerRings: 0 });
    const content = layout.filter((block) => !block.outsideProject);
    const controls = layout.filter((block) => block.outsideProject);
    assert.equal(controls.length, getProjectNavigation(pages, page.id).count + 4, page.id);
    const minZ = Math.min(...content.map((block) => block.worldZ - block.worldD / 2));
    const maxZ = Math.max(...content.map((block) => block.worldZ + block.worldD / 2));
    controls.forEach((block) => {
      const beforeProject = block.id.endsWith('-back');
      const gap = beforeProject
        ? minZ - (block.worldZ + block.worldD / 2)
        : block.worldZ - block.worldD / 2 - maxZ;
      assert.ok(gap >= TILE_GRID.gap - 1e-8, `${page.id}: ${block.id} intersects the project`);
      if (block.subtype !== 'pageIndicator') {
        assert.ok(Math.abs(gap - TILE_GRID.gap) < 1e-8, `${page.id}: ${block.id} leaves an extra gap`);
      }
    });
  }
});

for (const category of ['projects', 'experiments', 'teaching']) {
  test(`${category}: foreground and background cubes have no intersecting footprints`, () => {
    const gallery = createProjectGallery(pages, category, createTile);
    // These include inactive controls, so their space stays clear as they rise.
    const footprints = getBlockFootprints([gallery]);
    for (let i = 0; i < footprints.length; i++) {
      for (let j = i + 1; j < footprints.length; j++) {
        assert.ok(!intersects(footprints[i], footprints[j]), 'project blocks intersect');
      }
    }
    for (let i = 0; i < gallery.children.length; i++) {
      const offset = getProjectTilePosition(i);
      const bounds = {
        minX: Math.floor(offset.x / 2.4) - 3, maxX: Math.ceil(offset.x / 2.4) + 3,
        minZ: Math.floor(offset.z / 2) - 5, maxZ: Math.ceil(offset.z / 2) + 5,
      };
      const background = createGridBlocks(bounds, footprints).map(gridRect);
      assert.ok(background.length > 0);
      for (let a = 0; a < background.length; a++) {
        footprints.forEach((rect) => assert.ok(!intersects(background[a], rect), 'grid intersects a project or control'));
        for (let b = a + 1; b < background.length; b++) {
          assert.ok(!intersects(background[a], background[b]), 'grid pieces intersect');
        }
      }
    }
  });
}

test('clipping across grid boundaries preserves distant cubes and clears only occupied space', () => {
  const bounds = { minX: -3, maxX: 3, minZ: -3, maxZ: 3 };
  const cutout = { minX: -0.7, maxX: 3.15, minZ: -1.3, maxZ: 2.45 };
  const original = createGridBlocks(bounds);
  const clipped = createGridBlocks(bounds, [cutout]);
  const byPosition = new Map(clipped.map((block) => [`${block.x},${block.z}`, block]));
  original.filter((block) => !intersects(gridRect({ ...block, width: block.width + 0.08, depth: block.depth + 0.08 }), cutout))
    .forEach((block) => assert.deepEqual(byPosition.get(`${block.x},${block.z}`), block));
  clipped.forEach((block) => {
    assert.ok(block.width >= 0.18 && block.depth >= 0.18, 'clipping must not leave thin slivers');
    assert.ok(!intersects(gridRect(block), cutout));
  });
});

test('changing occupied space refreshes the grid even when the camera stays still', () => {
  const grid = new InfiniteGrid();
  const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 500);
  camera.position.set(3, 24, 15);
  camera.lookAt(0, 0, 0);
  grid.update(camera);
  const originalCount = grid.blocks.count;
  const originalBounds = grid.lastBounds;
  grid.setExclusions([{ minX: -5, maxX: 5, minZ: -5, maxZ: 5 }]);
  grid.update(camera);
  assert.equal(grid.lastBounds, originalBounds);
  assert.ok(grid.blocks.count < originalCount);
  assert.equal(grid.blocks.count, grid.edges.geometry.instanceCount);
  grid.setExclusions([]);
  grid.update(camera);
  assert.equal(grid.blocks.count, originalCount);
});
