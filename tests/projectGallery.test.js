import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import * as THREE from 'three';
import { createProjectGallery, getProjectTilePosition } from '../src/core/projectGallery.js';
import { generateLayout } from '../src/core/layoutEngine.js';
import { getNewestProjectItems, getProjectNavigation, resolveCategoryPageId } from '../src/core/projectNavigation.js';
import { TransitionManager } from '../src/core/transitionManager.js';

const { pages } = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));

for (const categoryId of ['projects', 'experiments', 'teaching']) {
  test(`${categoryId}: all projects coexist in order, with working entry and wraparound targets`, () => {
    const items = getNewestProjectItems(pages.find((page) => page.id === categoryId));
    const builtPages = [];
    const gallery = createProjectGallery(pages, categoryId, (page, navigation) => {
      builtPages.push(page.id);
      assert.equal(navigation.categoryId, categoryId);
      return new THREE.Group();
    });

    assert.deepEqual(builtPages, items.map((item) => item.target));
    assert.equal(gallery.children.length, items.length);
    assert.equal(resolveCategoryPageId(pages, categoryId), items[0].target);

    items.forEach((item, index) => {
      const tile = gallery.userData.projectTiles.get(item.target);
      assert.equal(tile.parent, gallery);
      assert.ok(tile.position.equals(getProjectTilePosition(index)));
      const navigation = getProjectNavigation(pages, item.target);
      assert.equal(navigation.previousPageId, items[(index - 1 + items.length) % items.length].target);
      assert.equal(navigation.nextPageId, items[(index + 1) % items.length].target);
    });
  });

  test(`${categoryId}: neighboring cards and decorative blocks do not intersect`, () => {
    const bounds = [];
    createProjectGallery(pages, categoryId, (page, projectNavigation) => {
      const offset = getProjectTilePosition(projectNavigation.index);
      const blocks = generateLayout({ ...page, projectNavigation }, { fillerRings: 0 });
      bounds.push({
        min: Math.min(...blocks.map((block) => offset.x + block.worldX - block.worldW / 2)),
        max: Math.max(...blocks.map((block) => offset.x + block.worldX + block.worldW / 2)),
      });
      return new THREE.Group();
    });
    for (let index = 1; index < bounds.length; index++) {
      assert.ok(bounds[index - 1].max < bounds[index].min);
    }
  });
}

test('gallery entry animations run concurrently, without growing with the number of projects', () => {
  const manager = new TransitionManager();
  const gallery = createProjectGallery(pages, 'projects', (page, projectNavigation) => {
    const tile = new THREE.Group();
    const blocks = generateLayout({ ...page, projectNavigation }, { fillerRings: 0 });
    for (const blockData of blocks) {
      const block = new THREE.Object3D();
      block.userData = { isBlockMesh: true, blockData };
      tile.add(block);
    }
    return tile;
  });
  const longestTile = Math.max(...gallery.children.map((tile) => manager.getGroupAnimationDuration(tile)));
  assert.equal(manager.getGroupAnimationDuration(gallery), longestTile);
  assert.ok(longestTile < 2000);
});
