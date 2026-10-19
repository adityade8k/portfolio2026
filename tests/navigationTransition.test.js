import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import { getBlockFootprints } from '../src/core/infiniteGrid.js';
import { TransitionManager } from '../src/core/transitionManager.js';

function block(blockData) {
  blockData = { worldW: 1, worldD: 1, ...blockData };
  const group = new THREE.Group();
  const mesh = new THREE.Object3D();
  mesh.userData = { isBlockMesh: true, originalHeight: 2, originalY: 1, blockData };
  mesh.position.y = 1;
  group.userData = { blockData, mesh };
  group.add(mesh);
  return group;
}

function projectTile(x = 0) {
  const tile = new THREE.Group();
  tile.position.x = x;
  tile.add(
    block({ action: { type: 'back' } }),
    block({ action: { type: 'project', direction: -1 } }),
    block({ subtype: 'pageIndicator' }),
    block({ action: { type: 'project', direction: 1 } }),
    block({ type: 'moreInfo' }), block({ subtype: 'image' }),
    block({ subtype: 'text' }), block({ type: 'filler' }),
  );
  return tile;
}

test('camera arrives at grid, then grid lowers, then the destination rises while the old tile stays up', async () => {
  const manager = new TransitionManager();
  const oldTile = projectTile();
  const newTile = projectTile(10);
  manager.setProjectTileActive(newTile, false);
  const steps = [];
  let finishCamera, finishGrid, finishArrival;
  const cameraTravel = new Promise((resolve) => { finishCamera = resolve; });
  const gridCleared = new Promise((resolve) => { finishGrid = resolve; });
  const arrival = new Promise((resolve) => { finishArrival = resolve; });
  manager.animateObjects = async (objects, direction) => {
    assert.equal(direction, 'enter');
    assert.deepEqual(objects, [newTile]);
    steps.push('enter');
    await arrival;
    manager.setGroupProgress(newTile, 1);
  };
  const transition = manager.transitionProjectTile({
    newTile,
    moveCamera: () => {
      steps.push('camera');
      assert.equal(newTile.visible, false);
      assert.equal(getBlockFootprints([oldTile, newTile]).length, 1);
      return cameraTravel;
    },
    clearGrid: () => {
      steps.push('grid-down');
      assert.equal(oldTile.visible, true);
      assert.equal(newTile.visible, true);
      newTile.children.forEach((block) => assert.equal(block.userData.mesh.scale.y, 0.001));
      return gridCleared;
    },
  });
  assert.deepEqual(steps, ['camera']);
  finishCamera();
  await new Promise(setImmediate);
  assert.deepEqual(steps, ['camera', 'grid-down']);
  assert.equal(manager.isTransitioning, true);
  finishGrid();
  await new Promise(setImmediate);
  assert.deepEqual(steps, ['camera', 'grid-down', 'enter']);
  finishArrival();
  await transition;
  for (const tile of [oldTile, newTile]) {
    assert.equal(tile.visible, true);
    tile.children.forEach((block) => assert.equal(block.userData.mesh.scale.y, 1));
  }
  assert.equal(manager.isTransitioning, false);
});

test('inactive project content and controls remain hidden when a category enters', () => {
  const manager = new TransitionManager();
  const tile = projectTile();
  manager.setProjectTileActive(tile, false);
  manager.setGroupProgress(tile, 1);
  assert.equal(tile.visible, false);
  tile.children.forEach((block) => assert.equal(block.userData.mesh.scale.y, 0.001));
  assert.equal(manager.getGroupAnimationDuration(tile), 0);
  assert.deepEqual(getBlockFootprints([tile]), []);
});

test('Back uses one uninterrupted camera sweep with overlapping exits/refills, then swaps the first tile for Home', async () => {
  const manager = new TransitionManager({ timeScale: 0.7 });
  const gallery = new THREE.Group();
  const tiles = [projectTile(), projectTile(10), projectTile(20), projectTile(30)];
  gallery.add(...tiles);
  tiles.forEach((tile, index) => manager.setProjectTileActive(tile, index < 3));
  const scene = new THREE.Scene();
  scene.add(gallery);
  const home = block({ subtype: 'text' });
  const exits = new Map();
  const refills = [];
  const lowered = [];
  let homeCreated = false, reachedHome = false, cameraMoves = 0;
  let reportProgress, finishCamera, finishFirstTile;
  manager.animateObjects = (objects, direction, timing) => {
    assert.equal(direction, 'exit');
    assert.equal(timing.duration, 220 * 0.7);
    const tile = objects[0];
    lowered.push(tile);
    return new Promise((resolve) => exits.set(tile, resolve));
  };
  manager.animateGroup = async (group, direction) => {
    assert.equal(reachedHome, true);
    if (direction === 'exit') {
      assert.equal(group, tiles[0]);
      assert.equal(tiles[0].visible, true);
      await new Promise((resolve) => { finishFirstTile = resolve; });
    } else {
      assert.equal(group, home);
      assert.equal(gallery.parent, null);
      assert.ok(tiles.every((tile) => !tile.visible));
      manager.setGroupProgress(home, 1);
    }
  };
  const returning = manager.returnThroughGallery({
    gallery, scene,
    returnPlan: { finalTile: tiles[0], departures: [
      { tile: tiles[2], progress: 0 }, { tile: tiles[1], progress: 0.5 },
    ] },
    newGroupFactory: () => { homeCreated = true; return home; },
    moveToDestination: (onProgress) => {
      cameraMoves++;
      reportProgress = onProgress;
      return new Promise((resolve) => { finishCamera = () => { reachedHome = true; resolve(); }; });
    },
    restoreGrid: () => new Promise((resolve) => refills.push(resolve)),
    clearGrid: () => assert.fail('the first tile swaps directly to Home'),
    updateGrid: () => {},
  });
  assert.equal(cameraMoves, 1);
  assert.deepEqual(lowered, [tiles[2]]);
  exits.get(tiles[2])();
  await new Promise(setImmediate);
  assert.equal(tiles[2].visible, false);
  assert.equal(refills.length, 1);
  reportProgress(0.5);
  assert.deepEqual(lowered, [tiles[2], tiles[1]], 'the next exit does not wait for the earlier grid refill');
  assert.equal(reachedHome, false);
  exits.get(tiles[1])();
  await new Promise(setImmediate);
  refills.forEach((resolve) => resolve());
  await new Promise(setImmediate);
  assert.equal(homeCreated, false);
  assert.equal(tiles[0].visible, true);
  finishCamera();
  await new Promise(setImmediate);
  assert.equal(homeCreated, false, 'Home waits for the first tile to finish lowering');
  finishFirstTile();
  assert.equal(await returning, home);
  assert.equal(cameraMoves, 1);
  assert.equal(home.parent, scene);
  assert.equal(home.userData.mesh.scale.y, 1);
  assert.equal(manager.isTransitioning, false);
});

test('Back from a direct link restores that project during travel, then lowers the origin grid for Home', async () => {
  const manager = new TransitionManager();
  const gallery = new THREE.Group();
  const tile = projectTile(50);
  gallery.add(tile);
  const scene = new THREE.Scene();
  scene.add(gallery);
  const steps = [];
  manager.animateObjects = async (objects, direction) => {
    assert.deepEqual(objects, [tile]);
    steps.push(direction);
  };
  manager.animateGroup = async () => steps.push('home-up');
  await manager.returnThroughGallery({
    gallery, returnPlan: { departures: [{ tile, progress: 0 }] }, scene,
    newGroupFactory: () => new THREE.Group(),
    moveToDestination: async () => steps.push('camera-home'),
    restoreGrid: async () => steps.push('grid-up'),
    clearGrid: async () => steps.push('grid-down'),
    updateGrid: () => assert.fail('Home must wait for its grid to lower'),
  });
  assert.deepEqual(steps, ['exit', 'camera-home', 'grid-up', 'grid-down', 'home-up']);
});

test('revisits and distant jumps keep every visited tile up without repeating its entrance', async () => {
  const manager = new TransitionManager();
  const tiles = [projectTile(), projectTile(10), projectTile(90), projectTile(100)];
  tiles.forEach((tile, index) => manager.setProjectTileActive(tile, index === 0));
  const entered = [];
  manager.animateObjects = async (objects, direction) => {
    assert.equal(direction, 'enter');
    entered.push(...objects);
    objects.forEach((object) => manager.setGroupProgress(object, 1));
  };
  const visited = new Set([0]);
  let selected = 0;
  for (const next of [1, 0, 2, 0]) {
    await manager.transitionProjectTile({
      newTile: tiles[next],
      moveCamera: async () => assert.equal(tiles[selected].visible, true),
      clearGrid: async () => assert.equal(visited.has(next), false),
    });
    visited.add(next);
    tiles.forEach((tile, index) => {
      assert.equal(tile.visible, visited.has(index));
      tile.children.forEach((block) => assert.equal(block.userData.mesh.scale.y, visited.has(index) ? 1 : 0.001));
    });
    selected = next;
  }
  assert.deepEqual(entered, [tiles[1], tiles[2]]);
});

for (const route of ['when entering a distant gallery', 'when replacing a standalone page']) {
test(`all five phases finish in order ${route}`, async () => {
  const manager = new TransitionManager();
  const scene = new THREE.Scene();
  const oldGroup = block({ subtype: 'image' });
  const newGroup = block({ subtype: 'image' });
  scene.add(oldGroup);
  const steps = [];
  let finishExit;
  const exited = new Promise((resolve) => { finishExit = resolve; });
  manager.animateGroup = async (group, direction) => {
    steps.push(direction);
    if (direction === 'exit') {
      assert.equal(newGroup.userData.mesh.scale.y, 0.001);
      await exited;
      manager.setGroupProgress(group, 0);
    } else {
      assert.equal(steps.at(-2), 'grid-down');
      assert.equal(oldGroup.parent, null);
      manager.setGroupProgress(group, 1);
    }
  };
  const result = manager.transitionToPage({
    oldGroup, newGroupFactory: () => newGroup, scene,
    restoreGrid: async () => {
      assert.equal(oldGroup.parent, null);
      await Promise.resolve();
      steps.push('grid-up');
    },
    moveCamera: async () => {
      assert.equal(steps.at(-1), 'grid-up');
      await Promise.resolve();
      steps.push('camera');
    },
    clearGrid: async (group) => {
      assert.equal(group, newGroup);
      assert.equal(newGroup.userData.mesh.scale.y, 0.001);
      assert.equal(steps.at(-1), 'camera');
      await Promise.resolve();
      steps.push('grid-down');
    },
  });
  assert.deepEqual(steps, ['exit']);
  finishExit();
  assert.equal(await result, newGroup);
  assert.deepEqual(steps, ['exit', 'grid-up', 'camera', 'grid-down', 'enter']);
  assert.equal(newGroup.parent, scene);
});
}

test('pages sharing a location swap directly after the old tiles lower, with no grid animation or camera delay', async () => {
  const manager = new TransitionManager();
  const scene = new THREE.Scene();
  let currentGroup = projectTile();
  scene.add(currentGroup);
  // Cover Home → About → Home → first project → Home.
  for (const destination of ['about', 'home', 'first-project', 'home']) {
    const oldGroup = currentGroup;
    const newGroup = projectTile();
    const steps = [];
    manager.animateGroup = async (group, direction) => {
      steps.push(direction);
      if (direction === 'exit') {
        newGroup.children.forEach((child) => assert.equal(child.userData.mesh.scale.y, 0.001));
      } else {
        assert.equal(oldGroup.parent, null);
        assert.equal(steps.at(-2), 'update-footprint');
      }
      manager.setGroupProgress(group, direction === 'enter' ? 1 : 0);
    };
    currentGroup = await manager.transitionToPage({
      oldGroup, newGroupFactory: () => newGroup, scene,
      clearGrid: (group) => {
        assert.equal(group, newGroup);
        assert.equal(oldGroup.parent, null);
        steps.push('update-footprint');
      },
    });
    assert.deepEqual(steps, ['exit', 'update-footprint', 'enter'], destination);
    assert.equal(currentGroup, newGroup);
  }
});

test('a moved camera can recenter between same-location pages while their tiles are hidden', async () => {
  const manager = new TransitionManager();
  const scene = new THREE.Scene();
  const oldGroup = projectTile();
  const newGroup = projectTile();
  scene.add(oldGroup);
  const steps = [];
  let finishCorrection;
  const corrected = new Promise((resolve) => { finishCorrection = resolve; });
  manager.animateGroup = async (group, direction) => {
    steps.push(direction);
    manager.setGroupProgress(group, direction === 'enter' ? 1 : 0);
  };
  const transition = manager.transitionToPage({
    oldGroup, newGroupFactory: () => newGroup, scene,
    moveCamera: async () => {
      assert.equal(oldGroup.parent, null);
      newGroup.children.forEach((child) => assert.equal(child.userData.mesh.scale.y, 0.001));
      steps.push('recenter');
      await corrected;
    },
    clearGrid: () => steps.push('update-footprint'),
  });
  await Promise.resolve();
  await Promise.resolve();
  assert.deepEqual(steps, ['exit', 'recenter']);
  finishCorrection();
  await transition;
  assert.deepEqual(steps, ['exit', 'recenter', 'update-footprint', 'enter']);
});

test('30% shorter timing applies to page and incoming project animations', async () => {
  const baseline = new TransitionManager();
  const faster = new TransitionManager({ timeScale: 0.7 });
  const oldTile = projectTile();
  const newTile = projectTile(10);
  assert.ok(Math.abs(faster.getGroupAnimationDuration(oldTile) - baseline.getGroupAnimationDuration(oldTile) * 0.7) < 1e-8);
  const timing = [];
  faster.animateObjects = async (objects, direction, options) => timing.push(options);
  faster.setProjectTileActive(newTile, false);
  await faster.transitionProjectTile({ newTile, moveCamera: async () => {} });
  assert.equal(timing.length, 1);
  assert.equal(timing[0].duration, 260 * 0.7);
  assert.ok(timing.every((options) => options.stagger === 4 * 0.7));
});

test('list replacements also remove old blocks before the replacement rises', async () => {
  const manager = new TransitionManager();
  const parent = new THREE.Group();
  const oldBlock = block({ subtype: 'image' });
  const newBlock = block({ subtype: 'image' });
  parent.add(oldBlock);
  const steps = [];
  manager.animateObjects = async (objects, direction) => {
    steps.push(direction);
    if (direction === 'exit') assert.equal(newBlock.userData.mesh.scale.y, 0.001);
    else assert.equal(oldBlock.parent, null);
    objects.forEach((object) => manager.setGroupProgress(object, direction === 'enter' ? 1 : 0));
  };
  await manager.replaceChildren({ parent, oldChildren: [oldBlock], newChildren: [newBlock] });
  assert.deepEqual(steps, ['exit', 'enter']);
  assert.equal(newBlock.parent, parent);
});

test('page swaps run 50% faster without changing project travel arrival timing', async () => {
  const oldSpeed = new TransitionManager({ timeScale: 0.7 });
  const newSpeed = new TransitionManager({ timeScale: 0.7, pageTimeScale: 1 / 1.5 });
  const page = projectTile();
  assert.ok(Math.abs(newSpeed.getGroupAnimationDuration(page) * 1.5 - oldSpeed.getGroupAnimationDuration(page)) < 1e-8);
  const timings = [];
  newSpeed.animateObjects = async (objects, direction, timing) => timings.push(timing);
  newSpeed.setProjectTileActive(page, false);
  await newSpeed.transitionProjectTile({ newTile: page, moveCamera: async () => {}, clearGrid: async () => {} });
  assert.equal(timings[0].duration, 260 * 0.7);
});
