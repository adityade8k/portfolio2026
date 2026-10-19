import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import * as THREE from 'three';
import { createBlock } from '../src/core/blockFactory.js';
import { generateLayout } from '../src/core/layoutEngine.js';
import { getProjectNavigation } from '../src/core/projectNavigation.js';

const { pages } = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));
const page = pages.find((page) => page.id === 'liveBallData');
const layout = () => generateLayout({ ...page, projectNavigation: getProjectNavigation(pages, page.id) }, { isMobile: true, fillerRings: 0 });

test('cricket overview has a full-width image at its original aspect ratio and a single description', () => {
  const blocks = layout();
  const hero = blocks.find((block) => block.id === 'liveBallData-hero');
  assert.ok(Math.abs(hero.worldW / hero.worldD - 1320 / 740) < 1e-10);
  assert.equal(hero.gridW, 6);
  assert.equal(hero.content.fit, 'contain');
  const descriptions = blocks.filter((block) => block.type === 'content' && block.subtype === 'text');
  assert.equal(descriptions.length, 1);
  assert.ok(Math.abs(descriptions[0].content.fontSize - 0.46 * 0.7) < 1e-10);
  assert.equal(descriptions[0].content.textAlign, 'left');
  assert.deepEqual(blocks.find((block) => block.type === 'moreInfo').modal, page.projectDetails.modal);
  assert.equal(blocks.find((block) => block.id === 'liveBallData-link'), undefined);
  assert.equal(page.projectDetails.link, undefined);
});

test('cricket tags start at the top, grow to fit, and never intersect the hero or other blocks', () => {
  for (let attempt = 0; attempt < 10; attempt++) {
    const blocks = layout();
    const tags = blocks.filter((block) => block.action?.type === 'tag' && !block.metadataKind);
    assert.deepEqual(tags.map((block) => block.action.tag), page.projectDetails.tags);
    assert.equal(tags[0].gridYUnit, 0);
    tags.slice(1).forEach((block, index) => assert.equal(block.gridYUnit, tags[index].gridYUnit + tags[index].gridHUnit));
    const longTagBlocks = generateLayout({ ...page, projectDetails: { ...page.projectDetails, tags: ['BROADCAST'] } }, { fillerRings: 0 });
    assert.equal(longTagBlocks.find((block) => block.action?.tag === 'BROADCAST').gridW, 2);
    for (let a = 0; a < blocks.length; a++) for (let b = a + 1; b < blocks.length; b++) {
      const one = blocks[a], two = blocks[b];
      const overlapX = Math.abs(one.worldX - two.worldX) < (one.worldW + two.worldW) / 2 - 1e-8;
      const overlapZ = Math.abs(one.worldZ - two.worldZ) < (one.worldD + two.worldD) / 2 - 1e-8;
      assert.ok(!overlapX || !overlapZ, `${one.id} intersects ${two.id}`);
    }
  }
});

test('titles and paragraph blocks on every project page are left-aligned', () => {
  for (const page of pages.filter((page) => page.template === 'projectDetail')) {
    const blocks = generateLayout(page, { fillerRings: 0 });
    for (const block of blocks.filter((block) => block.id.endsWith('-title') || block.id.endsWith('-text-wide') || block.id.endsWith('-text-tall'))) {
      assert.equal(block.content.textAlign, 'left', block.id);
    }
  }
});

test('a cropped thumbnail cannot change the uncropped hero texture, and image textures are released', async () => {
  const original = new THREE.Texture({ width: 1320, height: 740 });
  const loader = { load: (_, loaded) => loaded(original) };
  const data = {
    type: 'content', subtype: 'image', color: '#ffffff', height: 1.7,
    worldW: 7.12, worldD: 7.12 * 740 / 1320, worldX: 0, worldZ: 0,
    content: { src: '/test-cricket-image.webp', fit: 'contain' },
  };
  const hero = createBlock(data, loader).userData.mesh.children.find((child) => child.isMesh);
  const thumbnail = createBlock({ ...data, worldD: 7.12, content: { src: data.content.src } }, loader)
    .userData.mesh.children.find((child) => child.isMesh);
  await new Promise(setImmediate);
  assert.deepEqual(hero.material.map.repeat.toArray(), [1, 1]);
  assert.deepEqual(original.repeat.toArray(), [1, 1]);
  assert.notEqual(hero.material.map, thumbnail.material.map);
  assert.ok(thumbnail.material.map.repeat.x < 1);
  let released = false;
  hero.material.map.addEventListener('dispose', () => { released = true; });
  hero.material.dispose();
  thumbnail.material.dispose();
  assert.equal(released, true);
});


test('every active overview preserves image proportions, exposes metadata tags, and has no block collisions', () => {
  const active = pages.filter((candidate) => getProjectNavigation(pages, candidate.id));
  for (const project of active) {
    for (let attempt = 0; attempt < 10; attempt++) {
      const blocks = generateLayout({ ...project, projectNavigation: getProjectNavigation(pages, project.id) }, { fillerRings: 0 });
      const hero = blocks.find((b) => b.id === `${project.id}-hero`);
      const [width, height] = project.projectDetails.presentation.imageSize;
      assert.ok(Math.abs(hero.worldW / hero.worldD - width / height) < 1e-8, project.id);
      assert.equal(hero.content.fit, 'contain');
      assert.equal(blocks.filter((b) => b.id.endsWith('-text-wide')).length, 1);
      assert.ok(!blocks.some((b) => b.id.endsWith('-text-tall') || b.id.endsWith('-tags-label')));
      const metadata = project.projectDetails.metadata;
      assert.deepEqual(blocks.filter((b) => b.metadataKind).map((b) => b.action.tag), [...metadata.years, ...metadata.organizations], project.id);
      const cells = new Set();
      for (const block of blocks.filter((b) => !b.outsideProject && b.subtype !== 'heroSurround')) {
        for (let y = block.gridY * 2; y < (block.gridY + block.gridH) * 2; y++) {
          for (let x = block.gridX; x < block.gridX + block.gridW; x++) {
            const cell = `${x},${y}`;
            assert.ok(!cells.has(cell), `${project.id}: duplicate cell ${cell}`);
            assert.ok(x >= 0 && x < 6 && y >= 0 && y < 20, `${project.id}: outside frame`);
            cells.add(cell);
          }
        }
      }
      assert.equal(cells.size, 120, `${project.id}: unfilled cell`);
      for (let i = 0; i < blocks.length; i++) for (let j = i + 1; j < blocks.length; j++) {
        const a = blocks[i], b = blocks[j];
        const overlapX = Math.abs(a.worldX - b.worldX) < (a.worldW + b.worldW) / 2 - 1e-8;
        const overlapZ = Math.abs(a.worldZ - b.worldZ) < (a.worldD + b.worldD) / 2 - 1e-8;
        assert.ok(!overlapX || !overlapZ, `${project.id}: ${a.id} intersects ${b.id}`);
      }
    }
  }
});


test('unused hero space is tiled with visible cubes, not an empty reserved strip', () => {
  for (const project of pages.filter((candidate) => getProjectNavigation(pages, candidate.id))) {
    const blocks = generateLayout({ ...project, projectNavigation: getProjectNavigation(pages, project.id) }, { fillerRings: 0 });
    const hero = blocks.find((b) => b.id === `${project.id}-hero`);
    const surrounds = blocks.filter((b) => b.subtype === 'heroSurround');
    const slotW = hero.gridW * 1.2 - 0.08, slotD = hero.gridH - 0.08;
    const probes = [];
    if ((slotW - hero.worldW) / 2 - 0.08 >= 0.1) {
      const dx = (slotW + hero.worldW) / 4;
      probes.push([hero.worldX - dx, hero.worldZ + 0.15], [hero.worldX + dx, hero.worldZ + 0.15]);
    }
    if ((slotD - hero.worldD) / 2 - 0.08 >= 0.1) {
      const dz = (slotD + hero.worldD) / 4;
      probes.push([hero.worldX + 0.15, hero.worldZ - dz], [hero.worldX + 0.15, hero.worldZ + dz]);
    }
    for (const [x,z] of probes) assert.ok(surrounds.some((b) => Math.abs(x-b.worldX) < b.worldW/2 && Math.abs(z-b.worldZ) < b.worldD/2), `${project.id}: unfilled hero band`);
  }
});
