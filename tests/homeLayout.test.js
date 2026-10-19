import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { generateLayout, TILE_GRID } from '../src/core/layoutEngine.js';

const { pages } = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));
const home = pages.find((page) => page.id === 'home');

test('Home keeps its aligned buttons, three distinct category colors, and a completely filled grid on every rebuild', () => {
  const original = JSON.stringify(home);
  for (let iteration = 0; iteration < 30; iteration++) {
    const blocks = generateLayout(home, { fillerRings: 0 });
    const byId = new Map(blocks.map((block) => [block.id, block]));
    for (const [id, expected] of Object.entries({
      'home-about': [0, 0, 2, 2],
      'home-projects': [2, 8, 2, 2],
      'home-teaching': [4, 8, 2, 2],
      'home-experiments': [0, 7, 4, 1],
      'home-explore-tags': [4, 7, 2, 1],
    })) {
      const block = byId.get(id);
      assert.ok(block, `${id} must always be placed`);
      assert.deepEqual([block.gridX, block.gridY, block.gridW, block.gridH], expected);
    }
    const colors = ['home-projects', 'home-teaching', 'home-experiments'].map((id) => byId.get(id).color);
    assert.deepEqual(colors.sort(), ['#e23d28', '#1f5fbf', '#f4c430'].sort());
    const occupied = new Set();
    for (const block of blocks) {
      for (let y = block.gridY; y < block.gridY + block.gridH; y++) {
        for (let x = block.gridX; x < block.gridX + block.gridW; x++) {
          const cell = `${x},${y}`;
          assert.ok(!occupied.has(cell), `overlap at ${cell}`);
          assert.ok(x >= 0 && x < TILE_GRID.cols && y >= 0 && y < TILE_GRID.rows);
          occupied.add(cell);
        }
      }
    }
    assert.equal(occupied.size, TILE_GRID.cols * TILE_GRID.rows);
    assert.ok(blocks.some((block) => block.type === 'filler'));
    assert.equal(JSON.stringify(home), original);
  }
});
