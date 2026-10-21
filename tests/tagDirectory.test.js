import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { createTagsPage, generateTagDirectoryLayout } from '../src/core/tagDirectory.js';
import { generateLayout, TILE_GRID } from '../src/core/layoutEngine.js';
import { getProjectTags, normalizeTag } from '../src/core/projectTags.js';
import { DEFAULT_PALETTE } from '../src/core/utils.js';

const data = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));
const byId = new Map(data.pages.map((page) => [page.id, page]));
const activeIds = ['projects', 'experiments', 'teaching'].flatMap((id) => byId.get(id).projectItems.map((item) => item.target));

test('catalog includes all active topic, year and organization tags plus unassigned AI exactly once', () => {
  const page = createTagsPage(data);
  const expected = new Set([...activeIds.flatMap((id) => getProjectTags(byId.get(id).projectDetails)), ...data.unassignedTags].map(normalizeTag));
  assert.equal(page.tags.length, 40);
  assert.deepEqual(new Set(page.tags.map((tag) => tag.id)), expected);
  assert.deepEqual(page.tags.find((tag) => tag.id === 'stancebeam'), {
    id: 'stancebeam', label: 'StanceBeam', kind: 'organization',
  });
  assert.equal(page.tags.filter((tag) => tag.id === 'ai').length, 1);
  assert.equal(page.tags.find((tag) => tag.id === 'ai').kind, 'topic');
  assert.equal(page.backTarget, 'home');
  assert.equal(createTagsPage(data, { backTarget: 'liveBallData' }).backTarget, 'liveBallData');
  for (const kind of ['topic', 'organization', 'year']) {
    const labels = page.tags.filter((tag) => tag.kind === kind).map((tag) => tag.label);
    const sorted = [...labels].sort((a, b) => kind === 'year'
      ? b.localeCompare(a, 'en', { numeric: true })
      : a.localeCompare(b, 'en', { sensitivity: 'base' }));
    assert.deepEqual(labels, sorted);
  }
  assert.ok(page.tags.findIndex((tag) => tag.kind === 'organization') > page.tags.findLastIndex((tag) => tag.kind === 'topic'));
  assert.ok(page.tags.findIndex((tag) => tag.kind === 'year') > page.tags.findLastIndex((tag) => tag.kind === 'organization'));
});

test('catalog normalizes duplicates and excludes inactive pages without changing full labels', () => {
  const page = createTagsPage({
    unassignedTags: ['AI'],
    pages: [
      { id: 'projects', projectItems: [{ target: 'included' }, { target: 'included' }] },
      { id: 'included', projectDetails: { tags: ['  THREE.JS ', 'Three.js', '2026'], metadata: { years: ['2026'], organizations: ['NYU K12 STEM'] } } },
      { id: 'unused', projectDetails: { tags: ['INACTIVE NOISE'] } },
    ],
  });
  assert.equal(page.tags.length, 4);
  assert.ok(!page.tags.some((tag) => tag.id === 'inactive-noise'));
  assert.equal(page.tags.find((tag) => tag.id === 'nyu-k12-stem').label, 'NYU K12 STEM');
  assert.equal(page.tags.find((tag) => tag.id === '2026').kind, 'year');
});

test('every tag remains readable and clickable inside a completely filled, collision-free frame', () => {
  const page = createTagsPage(data, { backTarget: 'liveBallData' });
  for (let run = 0; run < 30; run++) {
    const layout = generateTagDirectoryLayout(page, TILE_GRID, DEFAULT_PALETTE);
    const occupancy = Array.from({ length: 20 }, () => Array(6).fill(0));
    const tagBlocks = layout.filter((block) => block.action?.type === 'tag');
    assert.equal(tagBlocks.length, page.tags.length);
    assert.deepEqual(tagBlocks.map((block) => block.action.tag), page.tags.map((tag) => tag.id));
    assert.ok(tagBlocks.some((block) => block.gridH === 1));
    assert.ok(tagBlocks.some((block) => block.gridH === 0.5));
    for (const block of layout) {
      assert.ok(block.gridX >= 0 && block.gridY >= 0);
      assert.ok(block.gridX + block.gridW <= 6 && block.gridY + block.gridH <= 10);
      assert.ok(Number.isInteger(block.gridY * 2) && Number.isInteger(block.gridH * 2));
      assert.ok(block.height > 0 && DEFAULT_PALETTE.includes(block.color));
      for (let y = block.gridY * 2; y < (block.gridY + block.gridH) * 2; y++) {
        for (let x = block.gridX; x < block.gridX + block.gridW; x++) occupancy[y][x]++;
      }
      if (block.action?.type !== 'tag') continue;
      const tag = page.tags.find((candidate) => candidate.id === block.action.tag);
      assert.equal(block.content.text.replace(/\s+/g, ' '), tag.label);
      assert.equal(block.tagKind, tag.kind);
      const { fontSize, padding, lineHeight } = block.content;
      assert.ok(fontSize >= 0.28);
      const availableWidth = block.gridW * TILE_GRID.worldWidth / TILE_GRID.cols - TILE_GRID.gap - padding;
      const availableDepth = block.gridH * TILE_GRID.worldDepth / TILE_GRID.rows - TILE_GRID.gap - padding;
      const lines = block.content.text.split('\n');
      for (const line of lines) assert.ok(line.length * fontSize * 0.62 <= availableWidth + 1e-8, tag.label);
      assert.ok(lines.length * fontSize * lineHeight <= availableDepth + 1e-8, tag.label);
    }
    for (const row of occupancy) assert.deepEqual(row, [1, 1, 1, 1, 1, 1]);
    assert.deepEqual(layout.find((block) => block.id === 'tags-back').action, { type: 'back', target: 'liveBallData' });
    assert.equal(tagBlocks.find((block) => block.action.tag === 'ai').type, 'interaction');
  }
});

test('labels wrap into larger blocks without losing words', () => {
  const page = { id: 'tags', tags: [{ id: 'long-name', label: 'A longer organization name', kind: 'organization' }], backTarget: 'home' };
  const tag = generateTagDirectoryLayout(page, TILE_GRID).find((block) => block.action?.type === 'tag');
  assert.equal(tag.content.text.replace(/\s+/g, ' '), page.tags[0].label);
  assert.equal(tag.gridH, 1);
  assert.ok(tag.gridW <= 3);
});

test('an oversized catalog reports a capacity error rather than dropping tags', () => {
  const page = { id: 'tags', tags: Array.from({ length: 120 }, (_, i) => ({ id: `tag-${i}`, label: `Tag ${i}`, kind: 'topic' })) };
  assert.throws(() => generateTagDirectoryLayout(page, TILE_GRID), /complete tag catalog exceeds/);
});

test('generateLayout maps every directory button into the shared world frame', () => {
  const page = createTagsPage(data);
  const layout = generateLayout(page, { fillerRings: 0 });
  assert.equal(layout.filter((block) => block.action?.type === 'tag').length, 40);
  for (const block of layout) {
    assert.ok(Number.isFinite(block.worldX) && Number.isFinite(block.worldZ));
    assert.ok(block.worldW > 0 && block.worldD > 0);
    assert.ok(block.worldX - block.worldW / 2 >= -TILE_GRID.worldWidth / 2);
    assert.ok(block.worldX + block.worldW / 2 <= TILE_GRID.worldWidth / 2);
    assert.ok(block.worldZ - block.worldD / 2 >= -TILE_GRID.worldDepth / 2);
    assert.ok(block.worldZ + block.worldD / 2 <= TILE_GRID.worldDepth / 2);
  }
});
