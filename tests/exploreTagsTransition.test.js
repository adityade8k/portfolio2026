import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import { getBlockFootprints } from '../src/core/infiniteGrid.js';
import { TransitionManager } from '../src/core/transitionManager.js';

function deferred() {
  let resolve;
  const promise = new Promise((finish) => { resolve = finish; });
  return { promise, resolve };
}

const flush = () => new Promise(setImmediate);

function block(blockData = {}) {
  blockData = { worldW: 1, worldD: 1, ...blockData };
  const group = new THREE.Group();
  const mesh = new THREE.Object3D();
  mesh.userData = { isBlockMesh: true, originalHeight: 2, originalY: 1, blockData };
  mesh.position.y = 1;
  group.userData = { blockData, mesh };
  group.add(mesh);
  return group;
}

function projectTile(name, x = 0) {
  const tile = new THREE.Group();
  tile.name = name;
  tile.position.x = x;
  tile.add(
    block({ action: { type: 'back' } }),
    block({ subtype: 'pageIndicator' }),
    block({ type: 'moreInfo' }),
    block({ subtype: 'image' }),
    block({ subtype: 'text' }),
  );
  return tile;
}

function assertProgress(tile, expected) {
  tile.traverse((child) => {
    if (child.userData.isBlockMesh) assert.equal(child.scale.y, expected);
  });
}

test('Explore prepares an unvisited first tile during one return sweep, then lowers it before Tags rises', async () => {
  const manager = new TransitionManager();
  const scene = new THREE.Scene();
  const gallery = new THREE.Group();
  const first = projectTile('first');
  const middle = projectTile('middle', 10);
  const current = projectTile('current', 30);
  gallery.add(first, middle, current);
  scene.add(gallery);
  manager.setProjectTileActive(first, false);
  const tags = block({ subtype: 'text' });
  tags.name = 'tags';

  const firstGrid = deferred();
  const firstEntrance = deferred();
  const camera = deferred();
  const firstExit = deferred();
  const departureExits = new Map();
  const gridRefills = [];
  const steps = [];
  let reportProgress;
  let cameraMoves = 0;
  let prepareCalls = 0;
  let reachedFirst = false;
  let firstLowering = false;
  let tagsCreated = false;

  manager.animateObjects = async (objects, direction) => {
    assert.equal(objects.length, 1);
    const tile = objects[0];
    if (direction === 'enter') {
      assert.equal(tile, first);
      assert.equal(first.visible, true);
      assertProgress(first, 0.001);
      steps.push('first-up-start');
      await firstEntrance.promise;
      manager.setGroupProgress(first, 1);
      steps.push('first-up-finish');
    } else {
      assert.equal(direction, 'exit');
      assert.notEqual(tile, first, 'the first tile never joins the passing-tile departures');
      const exit = deferred();
      departureExits.set(tile, exit);
      steps.push(`${tile.name}-down`);
      await exit.promise;
      manager.setGroupProgress(tile, 0);
    }
  };
  manager.animateGroup = async (group, direction) => {
    assert.equal(reachedFirst, true, 'the final swap waits for the return camera');
    if (direction === 'exit') {
      assert.equal(group, first);
      assert.equal(first.visible, true);
      assertProgress(first, 1);
      firstLowering = true;
      steps.push('first-down-start');
      await firstExit.promise;
      manager.setGroupProgress(first, 0);
      steps.push('first-down-finish');
    } else {
      assert.equal(direction, 'enter');
      assert.equal(group, tags);
      assert.equal(gallery.parent, null);
      assert.equal(first.visible, false);
      assertProgress(tags, 0.001);
      assert.equal(steps.at(-1), 'tags-footprint');
      steps.push('tags-up');
      manager.setGroupProgress(tags, 1);
    }
  };

  const returning = manager.returnThroughGallery({
    gallery, scene,
    returnPlan: {
      finalTile: first,
      departures: [{ tile: current, progress: 0 }, { tile: middle, progress: 0.5 }],
    },
    prepareFinalTile: async (tile) => {
      prepareCalls++;
      assert.equal(tile, first);
      assert.equal(tile.visible, false);
      steps.push('prepare-first');
      manager.setProjectTileActive(tile, true, 0);
      // Reservation must happen while the first project is still below ground.
      assertProgress(first, 0.001);
      assert.ok(getBlockFootprints([gallery]).some((rect) => rect.minX < 0 && rect.maxX > 0));
      steps.push('first-grid-down');
      await firstGrid.promise;
      await manager.animateObjects([tile], 'enter');
    },
    moveToDestination: async (onProgress) => {
      cameraMoves++;
      assert.equal(prepareCalls, 1, 'preparation begins before the camera sweep');
      assert.equal(first.visible, true);
      assertProgress(first, 0.001);
      reportProgress = onProgress;
      steps.push('camera-start');
      await camera.promise;
      reachedFirst = true;
      steps.push('camera-finish');
    },
    restoreGrid: () => {
      const refill = deferred();
      gridRefills.push(refill);
      return refill.promise;
    },
    clearGrid: () => assert.fail('the prepared first tile swaps directly to Tags'),
    updateGrid: (group) => {
      assert.equal(group, tags);
      steps.push('tags-footprint');
    },
    newGroupFactory: () => {
      assert.equal(steps.at(-1), 'first-down-finish');
      tagsCreated = true;
      return tags;
    },
  });

  assert.equal(cameraMoves, 1, 'camera does not wait for the first tile preparation to finish');
  assert.equal(departureExits.has(current), true);
  assert.equal(departureExits.has(middle), false);
  reportProgress(0.5);
  assert.equal(departureExits.has(middle), true, 'passing tiles lower without extra camera stops');
  departureExits.get(current).resolve();
  departureExits.get(middle).resolve();
  await flush();
  assert.equal(current.visible, false);
  assert.equal(middle.visible, false);
  assert.equal(gridRefills.length, 2);

  camera.resolve();
  await flush();
  assert.equal(firstLowering, false, 'arrival alone cannot lower an unprepared tile');
  assert.equal(tagsCreated, false);
  firstGrid.resolve();
  await flush();
  assert.ok(steps.includes('first-up-start'));
  assert.equal(firstLowering, false, 'the first tile finishes rising before lowering');
  firstEntrance.resolve();
  await flush();
  assertProgress(first, 1);
  assert.equal(firstLowering, false, 'departing grid refills also finish before the final swap');
  gridRefills.forEach((refill) => refill.resolve());
  await flush();
  assert.equal(firstLowering, true);
  assert.equal(tagsCreated, false, 'Tags is not created until the first tile is down');
  firstExit.resolve();
  assert.equal(await returning, tags);
  assert.equal(cameraMoves, 1);
  assert.equal(prepareCalls, 1);
  assert.equal(tags.parent, scene);
  assertProgress(tags, 1);
  assert.equal(manager.isTransitioning, false);
  assert.ok(steps.indexOf('first-up-finish') < steps.indexOf('first-down-start'));
  assert.ok(steps.indexOf('first-down-finish') < steps.indexOf('tags-up'));
});

test('Explore from the already-visible first tile skips its reveal and swaps directly to Tags', async () => {
  const manager = new TransitionManager();
  const scene = new THREE.Scene();
  const gallery = new THREE.Group();
  const first = projectTile('first');
  const tags = block({ subtype: 'text' });
  gallery.add(first);
  scene.add(gallery);
  const steps = [];
  let cameraMoves = 0;
  manager.animateObjects = () => assert.fail('an already-visible first tile must not rise again');
  manager.animateGroup = async (group, direction) => {
    if (direction === 'exit') {
      assert.equal(group, first);
      assert.equal(first.visible, true);
      assertProgress(first, 1);
      steps.push('first-down');
      manager.setGroupProgress(first, 0);
    } else {
      assert.equal(group, tags);
      assert.equal(first.visible, false);
      assert.equal(gallery.parent, null);
      assert.equal(steps.at(-1), 'tags-footprint');
      steps.push('tags-up');
      manager.setGroupProgress(tags, 1);
    }
  };
  const result = await manager.returnThroughGallery({
    gallery, scene, returnPlan: { finalTile: first, departures: [] },
    prepareFinalTile: async (tile) => {
      assert.equal(tile, first);
      steps.push('prepare-visible-first');
      if (tile.visible) return;
      assert.fail('visible first tile should require no reveal');
    },
    // The real same-position camera callback resolves without a travel animation.
    moveToDestination: async () => { cameraMoves++; steps.push('camera-already-at-first'); },
    restoreGrid: () => assert.fail('no departing project needs a refill'),
    clearGrid: () => assert.fail('no grid needs lowering at the visible first tile'),
    updateGrid: () => steps.push('tags-footprint'),
    newGroupFactory: () => tags,
  });
  assert.equal(result, tags);
  assert.equal(cameraMoves, 1);
  assert.deepEqual(steps, [
    'prepare-visible-first', 'camera-already-at-first', 'first-down', 'tags-footprint', 'tags-up',
  ]);
  assert.equal(manager.isTransitioning, false);
});

test('Home return without the optional hook keeps an unvisited first tile hidden and lowers the origin grid', async () => {
  const manager = new TransitionManager();
  const scene = new THREE.Scene();
  const gallery = new THREE.Group();
  const first = projectTile('first');
  const current = projectTile('current', 40);
  const home = block({ subtype: 'text' });
  gallery.add(first, current);
  scene.add(gallery);
  manager.setProjectTileActive(first, false);
  const steps = [];
  manager.animateObjects = async (objects, direction) => {
    assert.deepEqual(objects, [current]);
    assert.equal(direction, 'exit');
    assert.equal(first.visible, false);
    steps.push('current-down');
    manager.setGroupProgress(current, 0);
  };
  manager.animateGroup = async (group, direction) => {
    assert.equal(group, home);
    assert.equal(direction, 'enter');
    assert.equal(first.visible, false);
    assert.equal(steps.at(-1), 'origin-grid-down');
    steps.push('home-up');
    manager.setGroupProgress(home, 1);
  };
  const result = await manager.returnThroughGallery({
    gallery, scene, returnPlan: { departures: [{ tile: current, progress: 0 }] },
    newGroupFactory: () => home,
    moveToDestination: async () => steps.push('camera-home'),
    restoreGrid: async () => steps.push('current-grid-up'),
    clearGrid: async () => steps.push('origin-grid-down'),
    updateGrid: () => assert.fail('Home still waits for the origin grid to lower'),
  });
  assert.equal(result, home);
  assert.deepEqual(steps, ['current-down', 'camera-home', 'current-grid-up', 'origin-grid-down', 'home-up']);
  assert.equal(first.visible, false);
  assert.equal(gallery.parent, null);
  assert.equal(home.parent, scene);
  assert.equal(manager.isTransitioning, false);
});
