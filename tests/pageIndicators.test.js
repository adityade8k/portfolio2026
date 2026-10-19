import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import * as THREE from 'three';
import { generateLayout } from '../src/core/layoutEngine.js';
import { getNewestProjectItems, getProjectNavigation } from '../src/core/projectNavigation.js';
import { createBlock } from '../src/core/blockFactory.js';
import { TransitionManager } from '../src/core/transitionManager.js';
import { getProjectTilePosition } from '../src/core/projectGallery.js';
import { createGridBlocks, getBlockFootprints } from '../src/core/infiniteGrid.js';
import { DEFAULT_PALETTE } from '../src/core/utils.js';

const { pages } = JSON.parse(readFileSync(new URL('../src/data/pages.json', import.meta.url)));
const tolerance = 1e-8;
const gap = 0.08;

function nearlyEqual(actual, expected, message) {
  assert.ok(Math.abs(actual - expected) < tolerance, `${message}: ${actual} != ${expected}`);
}

function blockRect(block, offset = { x: 0, z: 0 }) {
  return {
    minX: offset.x + block.worldX - block.worldW / 2,
    maxX: offset.x + block.worldX + block.worldW / 2,
    minZ: offset.z + block.worldZ - block.worldD / 2,
    maxZ: offset.z + block.worldZ + block.worldD / 2,
  };
}

function intersects(a, b) {
  return Math.min(a.maxX, b.maxX) - Math.max(a.minX, b.minX) > tolerance
    && Math.min(a.maxZ, b.maxZ) - Math.max(a.minZ, b.minZ) > tolerance;
}

function contains(outer, inner) {
  return outer.minX <= inner.minX + tolerance && outer.maxX >= inner.maxX - tolerance
    && outer.minZ <= inner.minZ + tolerance && outer.maxZ >= inner.maxZ - tolerance;
}

function indicatorRows(indicators) {
  const rows = [];
  for (const block of [...indicators].sort((a, b) => a.worldZ - b.worldZ || a.worldX - b.worldX)) {
    let row = rows.find((items) => Math.abs(items[0].worldZ - block.worldZ) < tolerance);
    if (!row) rows.push(row = []);
    row.push(block);
  }
  return rows.map((row) => row.sort((a, b) => a.worldX - b.worldX));
}

function assertIndicatorGeometry(layout, count, label) {
  const indicators = layout.filter((block) => block.subtype === 'pageIndicator');
  const previous = layout.find((block) => block.id.endsWith('-previous-project'));
  const next = layout.find((block) => block.id.endsWith('-next-project'));
  const rows = indicatorRows(indicators);
  const rowCount = count <= 10 ? 1 : count <= 20 ? 2 : 3;
  const expectedCounts = Array.from({ length: rowCount }, (_, index) =>
    Math.floor(count / rowCount) + (index < count % rowCount ? 1 : 0));
  assert.deepEqual(rows.map((row) => row.length), expectedCounts, `${label}: balanced row counts`);
  assert.deepEqual(rows.flat().map((block) => block.pageIndex),
    Array.from({ length: count }, (_, index) => index), `${label}: visual reading order`);

  if (rowCount === 1) {
    const pitch = 2.4 / count;
    const expectedGap = Math.min(gap, pitch * 0.2);
    indicators.forEach((block, index) => {
      // Preserve the original horizontal arrangement and half-depth front edge.
      nearlyEqual(block.worldW, pitch - expectedGap, `${label}: single-row width`);
      nearlyEqual(block.worldX, -1.2 + (index + 0.5) * pitch, `${label}: single-row position`);
      nearlyEqual(block.worldD, previous.worldD / 2, `${label}: half-depth`);
      nearlyEqual(blockRect(block).maxZ, blockRect(previous).maxZ, `${label}: front-aligned`);
    });
  } else {
    const expectedDepth = (previous.worldD - (rowCount - 1) * gap) / rowCount;
    rows.forEach((row, rowIndex) => {
      const left = blockRect(row[0]).minX;
      const right = blockRect(row.at(-1)).maxX;
      nearlyEqual(right - left, 2.32, `${label}: row ${rowIndex + 1} fills available width`);
      nearlyEqual(left - blockRect(previous).maxX, gap, `${label}: left arrow gap`);
      nearlyEqual(blockRect(next).minX - right, gap, `${label}: right arrow gap`);
      row.forEach((block) => {
        nearlyEqual(block.worldD, expectedDepth, `${label}: equal row depth`);
        nearlyEqual(block.worldW, row[0].worldW, `${label}: equal widths within a row`);
      });
      if (rowIndex > 0) {
        nearlyEqual(blockRect(row[0]).minZ - blockRect(rows[rowIndex - 1][0]).maxZ,
          gap, `${label}: gap between rows`);
      }
    });
    nearlyEqual(blockRect(rows[0][0]).minZ, blockRect(previous).minZ, `${label}: rear edge`);
    nearlyEqual(blockRect(rows.at(-1)[0]).maxZ, blockRect(previous).maxZ, `${label}: front edge`);
  }

  for (const row of rows) {
    row.forEach((block, index) => {
      assert.ok(block.worldW > 0 && block.worldD > 0, `${label}: positive bar dimensions`);
      assert.ok(block.outsideProject, `${label}: navigation remains outside the project`);
      if (index > 0) {
        const separation = blockRect(block).minX - blockRect(row[index - 1]).maxX;
        assert.ok(separation > tolerance && separation <= gap + tolerance, `${label}: horizontal seam`);
      }
    });
  }

  const navigationBlocks = [previous, ...indicators, next];
  for (let a = 0; a < navigationBlocks.length; a++) {
    for (let b = a + 1; b < navigationBlocks.length; b++) {
      assert.ok(!intersects(blockRect(navigationBlocks[a]), blockRect(navigationBlocks[b])),
        `${label}: ${navigationBlocks[a].id} intersects ${navigationBlocks[b].id}`);
    }
  }
}

function syntheticLayout(count, currentIndex = count - 1) {
  const page = pages.find((item) => item.id === 'liveBallData');
  const pageIds = Array.from({ length: count }, (_, index) => `synthetic-project-${index + 1}`);
  const projectNavigation = {
    index: currentIndex, count, pageIds,
    previousPageId: pageIds[(currentIndex - 1 + count) % count],
    nextPageId: pageIds[(currentIndex + 1) % count],
  };
  return { page, pageIds, layout: generateLayout({ ...page, projectNavigation }, { fillerRings: 0 }) };
}

function positionedGroup(layout, position) {
  const group = new THREE.Group();
  group.position.copy(position);
  layout.forEach((blockData) => {
    const block = new THREE.Group();
    block.position.set(blockData.worldX, 0, blockData.worldZ);
    block.userData = { blockData, mesh: {} };
    group.add(block);
  });
  return group;
}

function surroundingGrid(region, exclusions) {
  return createGridBlocks({
    minX: Math.floor(region.minX / 2.4) - 1, maxX: Math.ceil(region.maxX / 2.4) + 1,
    minZ: Math.floor(region.minZ / 2) - 1, maxZ: Math.ceil(region.maxZ / 2) + 1,
  }, exclusions);
}

for (const categoryId of ['projects', 'experiments', 'teaching']) {
  test(`${categoryId}: balanced indicators retain targets and only the current bar is taller and colored`, () => {
    const items = getNewestProjectItems(pages.find((page) => page.id === categoryId), pages);
    items.forEach((item, currentIndex) => {
      const page = pages.find((page) => page.id === item.target);
      const projectNavigation = getProjectNavigation(pages, page.id);
      const layout = generateLayout({ ...page, projectNavigation }, { fillerRings: 0 });
      const indicators = layout.filter((block) => block.subtype === 'pageIndicator');
      const arrow = layout.find((block) => block.id.endsWith('-previous-project'));
      assert.equal(indicators.length, items.length);
      assert.deepEqual(indicators.map((block) => block.action.target), items.map((item) => item.target));
      assert.equal(indicators.filter((block) => block.isCurrentPage).length, 1);
      assert.equal(indicators[currentIndex].isCurrentPage, true);
      indicators.forEach((block, index) => {
        assert.equal(block.type, 'interaction');
        assert.equal(block.elevation ?? 0, 0);
        assert.equal(block.height, arrow.height + (index === currentIndex ? 0.24 : 0));
        assert.equal(block.color, index === currentIndex ? DEFAULT_PALETTE[1 + index % 3] : (page.palette ?? DEFAULT_PALETTE)[0]);
      });
      assertIndicatorGeometry(layout, items.length, page.id);
      assert.ok(!layout.some((block) => block.subtype === 'counter'));
    });
  });
}

for (const count of [1, 10, 11, 13, 20, 21, 22, 31]) {
  test(`${count} pages use the required number of balanced rows without collisions`, () => {
    const { layout, pageIds } = syntheticLayout(count);
    const indicators = layout.filter((block) => block.subtype === 'pageIndicator');
    assert.equal(indicators.length, count);
    assert.deepEqual(indicators.map((block) => block.action.target), pageIds);
    assert.equal(indicators.filter((block) => block.isCurrentPage).length, 1);
    assert.equal(indicators.at(-1).isCurrentPage, true);
    assertIndicatorGeometry(layout, count, `${count} pages`);
  });
}

test('the taller active bar rests on the floor after lowering and rising', () => {
  const page = pages.find((page) => page.id === 'powaiYear1');
  const layout = generateLayout({ ...page, projectNavigation: getProjectNavigation(pages, page.id) }, { fillerRings: 0 });
  const active = layout.find((block) => block.isCurrentPage);
  const group = createBlock(active, null);
  const mesh = group.userData.mesh;
  const manager = new TransitionManager();
  nearlyEqual(mesh.position.y, active.height / 2, 'initial active bar rests on floor');
  assert.equal(mesh.geometry.parameters.height, active.height);
  manager.setGroupProgress(group, 0);
  assert.ok(mesh.position.y + active.height * mesh.scale.y / 2 < 0);
  manager.setGroupProgress(group, 1);
  nearlyEqual(mesh.position.y, active.height / 2, 'raised active bar rests on floor');
  nearlyEqual(mesh.userData.originalY, mesh.position.y, 'original position retained');
  mesh.geometry.dispose();
  mesh.material.dispose();
});

test('background grid blocks fill the freed strip behind single-row indicators', () => {
  for (const page of pages.filter((page) => getProjectNavigation(pages, page.id))) {
    const navigation = getProjectNavigation(pages, page.id);
    if (navigation.count > 10) continue;
    const layout = generateLayout({ ...page, projectNavigation: navigation }, { fillerRings: 0 });
    const group = positionedGroup(layout, getProjectTilePosition(navigation.index));
    const indicators = layout.filter((block) => block.subtype === 'pageIndicator');
    const arrow = layout.find((block) => block.id.endsWith('-previous-project'));
    const region = {
      minX: blockRect(indicators[0], group.position).minX,
      maxX: blockRect(indicators.at(-1), group.position).maxX,
      minZ: blockRect(arrow, group.position).minZ,
      maxZ: blockRect(indicators[0], group.position).minZ,
    };
    const background = surroundingGrid(region, getBlockFootprints([group]));
    const filledArea = background.reduce((total, block) => total
      + Math.max(0, Math.min(block.x + block.width / 2, region.maxX) - Math.max(block.x - block.width / 2, region.minX))
      * Math.max(0, Math.min(block.z + block.depth / 2, region.maxZ) - Math.max(block.z - block.depth / 2, region.minZ)), 0);
    // Allow normal cube seams while catching an entirely missing freed strip.
    assert.ok(filledArea > (region.maxX - region.minX) * (region.maxZ - region.minZ) * 0.5, page.id);
  }
});

for (const count of [11, 13, 21, 22, 31]) {
  test(`${count} pages: translated indicator footprint covers every row and excludes background cubes`, () => {
    const { layout } = syntheticLayout(count);
    const position = getProjectTilePosition(3).add(new THREE.Vector3(0.37, 0, -0.29));
    const group = positionedGroup(layout, position);
    const indicators = layout.filter((block) => block.subtype === 'pageIndicator');
    const rectangles = indicators.map((block) => blockRect(block, position));
    const region = {
      minX: Math.min(...rectangles.map((rect) => rect.minX)),
      maxX: Math.max(...rectangles.map((rect) => rect.maxX)),
      minZ: Math.min(...rectangles.map((rect) => rect.minZ)),
      maxZ: Math.max(...rectangles.map((rect) => rect.maxZ)),
    };
    const footprints = getBlockFootprints([group]);
    const indicatorFootprint = footprints.find((footprint) => contains(footprint, region));
    assert.ok(indicatorFootprint, 'all rows share one complete exclusion rectangle');
    nearlyEqual(indicatorFootprint.minZ, region.minZ - gap / 2, 'rear footprint includes seam');
    nearlyEqual(indicatorFootprint.maxZ, region.maxZ + gap / 2, 'front footprint includes seam');
    const background = surroundingGrid(region, footprints);
    assert.ok(background.length > 0, 'surrounding grid is present');
    for (const block of background) {
      const rectangle = {
        minX: block.x - block.width / 2, maxX: block.x + block.width / 2,
        minZ: block.z - block.depth / 2, maxZ: block.z + block.depth / 2,
      };
      for (const indicator of rectangles) {
        assert.ok(!intersects(rectangle, indicator), `${count} pages: grid cube intersects an indicator`);
      }
    }
  });
}
