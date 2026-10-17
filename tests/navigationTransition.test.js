import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import { getProjectNavigationBlocks } from '../src/core/projectGallery.js';
import { TransitionManager } from '../src/core/transitionManager.js';

function block(blockData) {
  const group = new THREE.Group();
  const mesh = new THREE.Object3D();
  mesh.userData = { isBlockMesh: true, originalHeight: 2, originalY: 1, blockData };
  mesh.position.y = 1;
  group.userData = { blockData, mesh };
  group.add(mesh);
  return group;
}

test('only Back, previous, count, and next participate in navigation transitions', () => {
  const tile = new THREE.Group();
  const controls = [
    block({ action: { type: 'back' } }),
    block({ action: { type: 'project', direction: -1 } }),
    block({ subtype: 'counter' }),
    block({ action: { type: 'project', direction: 1 } }),
  ];
  tile.add(...controls, block({ type: 'moreInfo' }), block({ subtype: 'image' }), block({ subtype: 'text' }));
  assert.deepEqual(getProjectNavigationBlocks(tile), controls);
});

test('controls lower completely before travel and destination controls rise only after arrival', async () => {
  const manager = new TransitionManager();
  const oldControls = [block({ action: { type: 'back' } }), block({ subtype: 'counter' })];
  const newControls = [block({ action: { type: 'back' } }), block({ subtype: 'counter' })];
  const content = block({ subtype: 'image' });
  newControls.forEach((control) => {
    control.userData.mesh.userData.skipPageTransition = true;
    manager.setGroupProgress(control, 0);
  });
  const steps = [];
  manager.animateObjects = async (objects, direction) => {
    steps.push(direction);
    objects.forEach((control) => manager.setMeshProgress(control.userData.mesh, direction === 'enter' ? 1 : 0));
  };
  await manager.transitionNavigation({
    oldControls, newControls,
    moveCamera: async () => {
      steps.push('camera');
      for (const control of [...oldControls, ...newControls]) {
        assert.equal(control.userData.mesh.scale.y, 0.001);
        assert.ok(control.userData.mesh.position.y < 0);
      }
      assert.equal(content.userData.mesh.scale.y, 1);
      assert.equal(content.userData.mesh.position.y, 1);
    },
  });
  assert.deepEqual(steps, ['exit', 'camera', 'enter']);
  oldControls.forEach((control) => assert.equal(control.userData.mesh.scale.y, 0.001));
  newControls.forEach((control) => assert.equal(control.userData.mesh.scale.y, 1));
});

test('inactive project controls remain hidden when a category enters', () => {
  const manager = new TransitionManager();
  const inactive = block({ action: { type: 'project' } });
  const content = block({ subtype: 'image' });
  inactive.userData.mesh.userData.skipPageTransition = true;
  const tile = new THREE.Group();
  tile.add(inactive, content);
  manager.setGroupProgress(tile, 1);
  assert.equal(inactive.userData.mesh.scale.y, 0.001);
  assert.equal(content.userData.mesh.scale.y, 1);
  assert.equal(manager.getGroupAnimationDuration(tile), manager.duration);
});
