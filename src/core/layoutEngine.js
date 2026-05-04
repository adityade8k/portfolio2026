import { DEFAULT_PALETTE, pickFillerColor, randomBetween, randomInt } from './utils.js';

const MOBILE_GRID = {
  cols: 6,
  rows: 10,
  worldWidth: 7.2,
  worldDepth: 10,
  gap: 0.08,
};

const SIZE_SPANS = {
  small: [
    [1, 1],
    [2, 1],
  ],
  medium: [[2, 2]],
  large: [[3, 3]],
  wide: [[4, 2]],
  shortWide: [
    [4, 1],
    [3, 1],
  ],
  tall: [[2, 4]],
};

export function generateLayout(page, options = {}) {
  const isMobile = options.isMobile ?? true;
  const grid = isMobile ? MOBILE_GRID : MOBILE_GRID;
  // TODO: Add desktop grid dimensions and placement tuning when the desktop design is defined.
  const palette = page.palette ?? DEFAULT_PALETTE;
  const fillerRings = options.fillerRings ?? 2;
  const occupancy = createOccupancy(grid.cols, grid.rows);
  const blocks = [];

  for (const authoredBlock of page.blocks ?? []) {
    const placed = placeAuthoredBlock(authoredBlock, occupancy, grid, palette);
    if (placed) {
      blocks.push(placed);
    }
  }

  blocks.push(...createFillerBlocks(occupancy, grid, palette));
  blocks.push(...createOuterFillerBlocks(grid, palette, fillerRings));

  return blocks.map((block) => addWorldRect(block, grid));
}

function placeAuthoredBlock(block, occupancy, grid, palette) {
  const spanOptions = SIZE_SPANS[block.size] ?? SIZE_SPANS.medium;

  for (const [gridW, gridH] of spanOptions) {
    const preferredPositions = getPreferredPositions(block.placement, grid, gridW, gridH);
    const fallbackPositions = getAllPositions(grid, gridW, gridH);
    const positions = [...preferredPositions, ...fallbackPositions];

    for (const position of positions) {
      if (canOccupy(position.x, position.y, gridW, gridH, occupancy, grid)) {
        markOccupied(position.x, position.y, gridW, gridH, occupancy);
        return {
          ...block,
          gridX: position.x,
          gridY: position.y,
          gridW,
          gridH,
          height: getBlockHeight(block.type),
          color: getAuthoredColor(block, palette),
        };
      }
    }
  }

  return null;
}

function createFillerBlocks(occupancy, grid, palette) {
  const fillers = [];
  let fillerIndex = 0;

  for (let y = 0; y < grid.rows; y += 1) {
    for (let x = 0; x < grid.cols; x += 1) {
      if (occupancy[y][x]) {
        continue;
      }

      const maxW = getMaxFreeWidth(x, y, occupancy, grid);
      const gridW = randomInt(1, Math.min(maxW, 3));
      const maxH = getMaxFreeHeight(x, y, gridW, occupancy, grid);
      const gridH = randomInt(1, Math.min(maxH, 3));

      markOccupied(x, y, gridW, gridH, occupancy);
      fillers.push({
        id: `filler-${fillerIndex}`,
        type: 'filler',
        subtype: 'decorative',
        gridX: x,
        gridY: y,
        gridW,
        gridH,
        height: randomBetween(0.45, 1.2),
        color: pickFillerColor(palette),
        content: null,
        action: null,
        modal: null,
      });
      fillerIndex += 1;
    }
  }

  return fillers;
}

function createOuterFillerBlocks(grid, palette, ringCount) {
  if (ringCount <= 0) {
    return [];
  }

  const fillers = [];
  const cream = palette[0] ?? DEFAULT_PALETTE[0];
  const ring = Math.floor(ringCount);
  const outerGrid = {
    cols: grid.cols + ring * 2,
    rows: grid.rows + ring * 2,
  };
  const occupancy = createOccupancy(outerGrid.cols, outerGrid.rows);
  let fillerIndex = 0;

  for (let y = 0; y < outerGrid.rows; y += 1) {
    for (let x = 0; x < outerGrid.cols; x += 1) {
      const gridX = x - ring;
      const gridY = y - ring;
      const isInsideComposition = gridX >= 0 && gridX < grid.cols && gridY >= 0 && gridY < grid.rows;

      if (isInsideComposition) {
        occupancy[y][x] = true;
        continue;
      }

      if (occupancy[y][x] || randomBetween(0, 1) < 0.18) {
        continue;
      }

      const maxW = getMaxFreeWidth(x, y, occupancy, outerGrid);
      const gridW = randomInt(1, Math.min(maxW, 2));
      const maxH = getMaxFreeHeight(x, y, gridW, occupancy, outerGrid);
      const gridH = randomInt(1, Math.min(maxH, 2));

      markOccupied(x, y, gridW, gridH, occupancy);
      fillers.push({
        id: `outer-filler-${fillerIndex}`,
        type: 'filler',
        subtype: 'outerDecorative',
        gridX,
        gridY,
        gridW,
        gridH,
        height: randomBetween(0.18, 0.58),
        color: cream,
        content: null,
        action: null,
        modal: null,
      });

      fillerIndex += 1;
    }
  }

  return fillers;
}

function addWorldRect(block, grid) {
  const cellW = grid.worldWidth / grid.cols;
  const cellD = grid.worldDepth / grid.rows;
  const worldW = Math.max(0.1, block.gridW * cellW - grid.gap);
  const worldD = Math.max(0.1, block.gridH * cellD - grid.gap);

  return {
    ...block,
    worldX: block.gridX * cellW + (block.gridW * cellW) / 2 - grid.worldWidth / 2,
    worldZ: block.gridY * cellD + (block.gridH * cellD) / 2 - grid.worldDepth / 2,
    worldW,
    worldD,
  };
}

function createOccupancy(cols, rows) {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
}

function canOccupy(x, y, w, h, occupancy, grid) {
  if (x < 0 || y < 0 || x + w > grid.cols || y + h > grid.rows) {
    return false;
  }

  for (let row = y; row < y + h; row += 1) {
    for (let col = x; col < x + w; col += 1) {
      if (occupancy[row][col]) {
        return false;
      }
    }
  }

  return true;
}

function markOccupied(x, y, w, h, occupancy) {
  for (let row = y; row < y + h; row += 1) {
    for (let col = x; col < x + w; col += 1) {
      occupancy[row][col] = true;
    }
  }
}

function getPreferredPositions(placement, grid, w, h) {
  const maxX = grid.cols - w;
  const maxY = grid.rows - h;
  const centerX = Math.round(maxX / 2);
  const centerY = Math.round(maxY / 2);

  const anchors = {
    hero: [
      [1, 1],
      [centerX, 1],
      [0, 1],
    ],
    top: [
      [centerX, 0],
      [0, 0],
      [maxX, 0],
    ],
    topRight: [
      [maxX, 0],
      [maxX, 1],
      [Math.max(0, maxX - 1), 0],
      [maxX, 2],
    ],
    topLeftStack1: [
      [0, 0],
      [1, 0],
      [0, 1],
    ],
    topLeftStack2: [
      [0, 1],
      [1, 1],
      [0, 2],
    ],
    topLeftStack3: [
      [0, 2],
      [1, 2],
      [0, 3],
    ],
    bottomCenter: [
      [centerX, maxY],
      [Math.max(0, centerX - 1), maxY],
      [Math.min(maxX, centerX + 1), maxY],
    ],
    aboutTall: [
      [0, 3],
      [0, 4],
      [1, 3],
      [centerX, centerY],
    ],
    aboutPracticeTop: [
      [2, 2],
      [1, 2],
      [2, 3],
      [centerX, 2],
    ],
    aboutHeroImage: [
      [maxX, 2],
      [maxX, 3],
      [Math.max(0, maxX - 1), 2],
      [maxX, 1],
    ],
    aboutImageBelow: [
      [maxX, 4],
      [maxX, 5],
      [Math.max(0, maxX - 1), 4],
      [maxX, 3],
    ],
    aboutWide: [
      [2, 5],
      [1, 6],
      [centerX, 6],
      [centerX, centerY],
    ],
    aboutLowerWide: [
      [1, maxY - 2],
      [centerX, maxY - 2],
      [0, maxY - 2],
      [2, maxY - 3],
    ],
    bottom: [
      [centerX, maxY],
      [0, maxY],
      [maxX, maxY],
    ],
    bottomRight: [
      [maxX, maxY],
      [maxX, Math.max(0, maxY - 2)],
      [Math.max(0, maxX - 2), maxY],
      [maxX, Math.max(0, maxY - 1)],
      [Math.max(0, maxX - 1), maxY],
      [centerX, maxY],
      [maxX, centerY],
    ],
    bottomRightTop: [
      [0, Math.max(0, maxY - 2)],
      [1, Math.max(0, maxY - 2)],
      [Math.max(0, maxX - 1), Math.max(0, maxY - 2)],
      [Math.max(0, maxX - 2), Math.max(0, maxY - 2)],
      [maxX, Math.max(0, maxY - 2)],
      [maxX, Math.max(0, maxY - 3)],
      [maxX, maxY],
    ],
    bottomRightLowerLeft: [
      [Math.max(0, maxX - 2), maxY],
      [Math.max(0, maxX - 1), maxY],
      [maxX, maxY],
      [Math.max(0, maxX - 2), Math.max(0, maxY - 1)],
    ],
    bottomRightLowerRight: [
      [maxX, maxY],
      [Math.max(0, maxX - 1), maxY],
      [maxX, Math.max(0, maxY - 1)],
      [Math.max(0, maxX - 2), maxY],
    ],
    left: [
      [0, centerY],
      [0, 1],
      [0, maxY],
    ],
    right: [
      [maxX, centerY],
      [maxX, 1],
      [maxX, maxY],
    ],
    center: [
      [centerX, centerY],
      [centerX, Math.max(0, centerY - 1)],
      [Math.max(0, centerX - 1), centerY],
    ],
    corner: [
      [0, 0],
      [maxX, 0],
      [0, maxY],
      [maxX, maxY],
    ],
    auto: [],
  };

  return (anchors[placement] ?? anchors.auto).map(([x, y]) => ({
    x: Math.max(0, Math.min(maxX, x)),
    y: Math.max(0, Math.min(maxY, y)),
  }));
}

function getAllPositions(grid, w, h) {
  const positions = [];

  for (let y = 0; y <= grid.rows - h; y += 1) {
    for (let x = 0; x <= grid.cols - w; x += 1) {
      positions.push({ x, y });
    }
  }

  return positions;
}

function getMaxFreeWidth(x, y, occupancy, grid) {
  let width = 0;

  while (x + width < grid.cols && !occupancy[y][x + width]) {
    width += 1;
  }

  return Math.max(1, width);
}

function getMaxFreeHeight(x, y, w, occupancy, grid) {
  let height = 0;

  while (y + height < grid.rows) {
    for (let col = x; col < x + w; col += 1) {
      if (occupancy[y + height][col]) {
        return Math.max(1, height);
      }
    }
    height += 1;
  }

  return Math.max(1, height);
}

function getBlockHeight(type) {
  if (type === 'interaction' || type === 'moreInfo') {
    return randomBetween(1.45, 1.9);
  }

  return randomBetween(0.9, 1.45);
}

function getAuthoredColor(block, palette) {
  if (block.color) {
    return block.color;
  }

  if (block.type === 'interaction' || block.type === 'moreInfo') {
    return palette[randomInt(1, palette.length - 1)] ?? palette[0];
  }

  return palette[0] ?? DEFAULT_PALETTE[0];
}
