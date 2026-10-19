import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import * as THREE from 'three';
import { getTopDownCameraLayout } from '../src/core/cameraFraming.js';
import { ReadingDrag, hasBlockAction, ContinuedOrbitDrag } from '../src/core/readingView.js';
import { generateLayout } from '../src/core/layoutEngine.js';
import { getProjectNavigation } from '../src/core/projectNavigation.js';
import { getProjectTilePosition } from '../src/core/projectGallery.js';

const { pages } = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));

for (const [width, height, mobile] of [[393, 852, true], [320, 568, true], [852, 393, true], [1440, 900, false], [1920, 1080, false]]) {
  test(`${width}×${height}: top view keeps all blocks and buttons visible at 0.5° with the requested margins`, () => {
    for (const page of pages.filter((page) => ['home', 'about'].includes(page.id) || page.template === 'projectDetail')) {
      const navigation = getProjectNavigation(pages, page.id);
      const origin = navigation ? getProjectTilePosition(navigation.index) : new THREE.Vector3();
      const blocks = generateLayout({ ...page, projectNavigation: navigation }, { isMobile: mobile, fillerRings: 0 });
      const bounds = {
        minX: Math.min(...blocks.map((block) => block.worldX - block.worldW / 2)) + origin.x,
        maxX: Math.max(...blocks.map((block) => block.worldX + block.worldW / 2)) + origin.x,
        minZ: Math.min(...blocks.map((block) => block.worldZ - block.worldD / 2)) + origin.z,
        maxZ: Math.max(...blocks.map((block) => block.worldZ + block.worldD / 2)) + origin.z,
        height: Math.max(...blocks.map((block) => block.height)) + 0.08,
      };
      const layout = getTopDownCameraLayout(width, height, bounds, mobile);
      const size = layout.viewSize;
      const camera = new THREE.OrthographicCamera(-size * width / height / 2, size * width / height / 2, size / 2, -size / 2, 0.1, 500);
      camera.zoom = layout.zoom;
      camera.position.copy(layout.position);
      camera.lookAt(layout.target);
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
      const angles = new THREE.Spherical().setFromVector3(layout.position.clone().sub(layout.target));
      assert.ok(Math.abs(THREE.MathUtils.radToDeg(angles.phi) - 0.5) < 1e-8);
      assert.equal(angles.theta, 0);
      const screenBounds = new THREE.Box2();
      for (const x of [bounds.minX, bounds.maxX]) for (const z of [bounds.minZ, bounds.maxZ]) for (const y of [0, bounds.height]) {
        const point = new THREE.Vector3(x, y, z).project(camera);
        screenBounds.expandByPoint(new THREE.Vector2(point.x, point.y));
      }
      const sideMargin = (1 - Math.max(Math.abs(screenBounds.min.x), Math.abs(screenBounds.max.x))) * width / 2;
      const verticalMargin = (1 - Math.max(Math.abs(screenBounds.min.y), Math.abs(screenBounds.max.y))) * height / 2;
      const padding = mobile ? 12 : 24;
      assert.ok(sideMargin >= padding - 1e-7, `${page.id}: side margin`);
      assert.ok(verticalMargin >= padding - 1e-7, `${page.id}: vertical margin`);
      if (width < height && width / height < 0.65) assert.ok(Math.abs(sideMargin - padding) < 1e-7);
      if (!mobile) assert.ok(Math.abs(verticalMargin - padding) < 1e-7);
    }
  });
}

test('reading drag resists movement, springs back below the threshold, and releases once in any direction', () => {
  for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [Math.SQRT1_2, Math.SQRT1_2]]) {
    const drag = new ReadingDrag(100, 100, 64);
    assert.equal(drag.move(102, 100).isClick, true);
    const pull = drag.move(100 + dx * 50, 100 + dy * 50);
    assert.equal(pull.released, false);
    assert.equal(pull.isClick, false);
    assert.ok(Math.hypot(pull.x, pull.y) < 5);
    assert.equal(drag.move(100, 100).isClick, false, 'moving back onto a button is still a drag');
    assert.equal(drag.move(100 + dx * 65, 100 + dy * 65).released, true);
    assert.equal(drag.move(100, 100).released, true, 'crossing the threshold cannot trigger a click later');
  }
});

test('only actual buttons keep their actions; paragraphs, titles, images and decorative blocks can enter reading view', () => {
  for (const block of [{ type: 'filler' }, { type: 'content', subtype: 'text' }, { type: 'content', subtype: 'image' }]) {
    assert.equal(hasBlockAction(block), false);
  }
  for (const type of ['state', 'project', 'tag', 'back', 'link', 'carousel']) {
    assert.equal(hasBlockAction({ action: { type } }), true);
  }
});


test('one held drag keeps rotating across camera arrival, without rebasing or snapping back', () => {
  const limits = {
    minPolarAngle: THREE.MathUtils.degToRad(0.5), maxPolarAngle: THREE.MathUtils.degToRad(40),
    minAzimuthAngle: -Math.PI / 4, maxAzimuthAngle: Math.PI / 4,
  };
  const drag = new ContinuedOrbitDrag(164, 200, 852,
    THREE.MathUtils.degToRad(40), THREE.MathUtils.degToRad(30), limits);
  const original = drag.azimuthAngle;
  // Input while the camera is returning modifies its live destination.
  drag.move(184, 200);
  const arrival = drag.azimuthAngle;
  assert.ok(arrival < original);
  // The same pointer continues after arrival; the remaining movement is added
  // to the existing rotation rather than starting a fresh drag at 30 degrees.
  drag.move(204, 200);
  assert.ok(Math.abs((original - arrival) - (arrival - drag.azimuthAngle)) < 1e-10);
  const stopped = drag.azimuthAngle;
  drag.move(204, 200);
  assert.equal(drag.azimuthAngle, stopped, 'release with no new movement preserves the final pose');
  drag.move(2000, 2000);
  assert.equal(drag.azimuthAngle, limits.minAzimuthAngle);
  assert.equal(drag.polarAngle, limits.minPolarAngle);
  drag.move(1990, 1990);
  assert.ok(drag.azimuthAngle > limits.minAzimuthAngle, 'reversing after a limit responds immediately');
  assert.ok(drag.polarAngle > limits.minPolarAngle);
});
