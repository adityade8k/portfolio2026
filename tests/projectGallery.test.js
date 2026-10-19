import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import * as THREE from 'three';
import { createProjectGallery, getProjectTilePosition, recordProjectVisit, getGalleryReturnTiles, getGalleryReturnPlan } from '../src/core/projectGallery.js';
import { generateLayout } from '../src/core/layoutEngine.js';
import { getNewestProjectItems, getProjectNavigation, resolveCategoryPageId } from '../src/core/projectNavigation.js';
import { TransitionManager } from '../src/core/transitionManager.js';

const { pages } = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));

test('the return path contains visited tiles once in reverse visit order, including revisits, jumps and wraparound', () => {
  const gallery = createProjectGallery(pages, 'projects', () => new THREE.Group());
  gallery.children.forEach((tile) => { tile.visible = false; });
  const ids = [...gallery.userData.projectTiles.keys()];
  for (const index of [0, 1, 7, 1, 10, 0, 2]) {
    gallery.userData.projectTiles.get(ids[index]).visible = true;
    recordProjectVisit(gallery, ids[index]);
  }
  assert.deepEqual(getGalleryReturnTiles(gallery).map((tile) => tile.userData.projectPageId),
    [2, 0, 10, 1, 7].map((index) => ids[index]));
  const freshGallery = createProjectGallery(pages, 'projects', () => new THREE.Group());
  assert.deepEqual(getGalleryReturnTiles(freshGallery), []);
});

for (const categoryId of ['projects', 'experiments', 'teaching']) {
  test(`${categoryId}: all projects coexist in order, with working entry and wraparound targets`, () => {
    const items = getNewestProjectItems(pages.find((page) => page.id === categoryId), pages);
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

test('gallery entry animates only the selected project, including a direct link to a middle project', async () => {
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
  const selected = gallery.children[4];
  gallery.children.forEach((tile) => manager.setProjectTileActive(tile, tile === selected));
  assert.equal(manager.getGroupAnimationDuration(gallery), manager.getGroupAnimationDuration(selected));
  assert.ok(manager.getGroupAnimationDuration(gallery) < 2000);
  const animated = [];
  manager.animateMeshes = async (meshes) => animated.push(...meshes);
  await manager.animateGroup(gallery, 'enter');
  assert.deepEqual(new Set(animated), new Set(selected.children));
  gallery.children.filter((tile) => tile !== selected).forEach((tile) => {
    assert.equal(tile.visible, false);
    tile.children.forEach((mesh) => assert.equal(mesh.scale.y, 0.001));
  });
});


test('return scheduling follows one spatial sweep after Previous, jumps, wraparound, and direct links', () => {
  for (const visits of [[0, 1, 2], [0, 1, 7, 1, 10, 0, 2], [0, 10], [5], [0, 3, 0]]) {
    const gallery = createProjectGallery(pages, 'projects', () => new THREE.Group());
    gallery.children.forEach((tile) => { tile.visible = false; });
    const ids = [...gallery.userData.projectTiles.keys()];
    for (const index of visits) {
      gallery.children[index].visible = true;
      recordProjectVisit(gallery, ids[index]);
    }
    const current = visits.at(-1);
    const plan = getGalleryReturnPlan(gallery, ids[current]);
    assert.equal(plan.finalTile, visits.includes(0) ? gallery.children[0] : undefined);
    assert.equal(plan.departures.length, new Set(visits.filter((index) => index !== 0)).size);
    for (const { tile, progress } of plan.departures) {
      const index = gallery.children.indexOf(tile);
      const expected = current ? Math.max(0, 1 - index / current) : 0;
      assert.ok(Math.abs(progress - expected) < 1e-8);
    }
  }
});
