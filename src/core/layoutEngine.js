import { DEFAULT_PALETTE, pickFillerColor, randomBetween, randomInt } from './utils.js';

const MOBILE_GRID = {
  cols: 6,
  rows: 10,
  worldWidth: 7.2,
  worldDepth: 10,
  gap: 0.08,
};

export const HEIGHT_RANGES = {
  content: {
    min: 1.6,
    max: 1.9,
  },
  filler: {
    min: 0.9,
    max: 1.7,
  },
  fillerRing: {
    min: 0.3,
    max: 0.8,
  },
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

  if (page.template === 'projectDetail') {
    const projectBlocks = generateProjectDetailLayout(page, grid, palette);
    return [...projectBlocks, ...createOuterFillerBlocks(grid, palette, fillerRings)].map((block) =>
      addWorldRect(block, grid),
    );
  }

  const occupancy = createOccupancy(grid.cols, grid.rows);
  const blocks = [];

  for (const authoredBlock of page.blocks ?? []) {
    const placed = placeAuthoredBlock(authoredBlock, occupancy, grid, palette);
    if (placed) {
      blocks.push(placed);
    }
  }

  blocks.push(...createFillerBlocks(occupancy, grid, palette, page));
  blocks.push(...createOuterFillerBlocks(grid, palette, fillerRings));

  return blocks.map((block) => addWorldRect(block, grid));
}

function generateProjectDetailLayout(page, grid, palette) {
  const unitsPerRow = 2;
  const unitRows = grid.rows * unitsPerRow;
  const occupancy = createOccupancy(grid.cols, unitRows);
  const blocks = [];
  const details = page.projectDetails ?? {};

  const addBlock = (block) => {
    markOccupied(block.gridX, block.gridYUnit, block.gridW, block.gridHUnit, occupancy);
    blocks.push({
      ...block,
      gridY: block.gridYUnit / unitsPerRow,
      gridH: block.gridHUnit / unitsPerRow,
      height: block.height ?? getBlockHeight(block.type),
      color: block.color ?? getAuthoredColor(block, palette),
    });
  };

  addBlock({
    id: `${page.id}-back`,
    type: 'interaction',
    subtype: 'text',
    gridX: 0,
    gridYUnit: 0,
    gridW: 1,
    gridHUnit: 2,
    content: { label: 'BACK', fontWeight: 700 },
    action: { type: 'state', target: 'projects' },
  });

  addBlock({
    id: `${page.id}-title`,
    type: 'content',
    subtype: 'header',
    gridX: randomBetween(0, 1) > 0.5 ? 1 : 2,
    gridYUnit: 0,
    gridW: 4,
    gridHUnit: 4,
    content: { text: details.title ?? page.title ?? page.id, fontWeight: 700 },
    color: palette[0],
  });

  addBlock({
    id: `${page.id}-tags-label`,
    type: 'content',
    subtype: 'text',
    gridX: 0,
    gridYUnit: 2,
    gridW: 1,
    gridHUnit: 1,
    content: { text: 'TAGS', fontWeight: 700 },
    color: palette[0],
    height: getContentBlockHeight(),
  });

  addProjectTagColumn({ page, details, blocks, occupancy, palette, addBlock });

  addBlock({
    id: `${page.id}-hero`,
    type: 'content',
    subtype: 'image',
    gridX: 1,
    gridYUnit: 4,
    gridW: 4,
    gridHUnit: 8,
    content: {
      src: details.image ?? '/images/project-placeholder.jpg',
      alt: `${details.title ?? page.id} hero image`,
    },
    color: palette[0],
  });

  const textBlocks = details.textBlocks ?? [];
  if (textBlocks[0]) {
    addBlock({
      id: `${page.id}-text-wide`,
      type: 'content',
      subtype: 'text',
      gridX: 1,
      gridYUnit: 12,
      gridW: 4,
      gridHUnit: 4,
      content: { text: textBlocks[0], fontWeight: 300 },
      color: palette[0],
    });
  }

  if (textBlocks[1]) {
    addBlock({
      id: `${page.id}-text-tall`,
      type: 'content',
      subtype: 'text',
      gridX: 1,
      gridYUnit: 16,
      gridW: 2,
      gridHUnit: 4,
      content: { text: textBlocks[1], fontWeight: 300 },
      color: palette[0],
    });
  }

  addBlock({
    id: `${page.id}-more`,
    type: 'moreInfo',
    subtype: 'text',
    gridX: 4,
    gridYUnit: 16,
    gridW: 2,
    gridHUnit: 4,
    content: { label: 'MORE INFO', fontWeight: 700 },
    modal: details.modal ?? {
      title: details.title ?? page.id,
      sections: [{ type: 'text', content: textBlocks.join('\n\n') }],
    },
  });

  if (details.link?.url) {
    addBlock({
      id: `${page.id}-link`,
      type: 'interaction',
      subtype: 'text',
      gridX: 3,
      gridYUnit: 18,
      gridW: 1,
      gridHUnit: 2,
      content: { label: details.link.label ?? 'LINK', fontWeight: 700 },
      action: { type: 'link', url: details.link.url },
    });
  }

  blocks.push(...createProjectDetailFillers(occupancy, grid, palette));
  return blocks;
}

function addProjectTagColumn({ page, details, occupancy, palette, addBlock }) {
  const tagSlots = shuffleArray(Array.from({ length: 14 }, (_, index) => index + 3));
  const tags = shuffleArray([...(details.tags ?? [])]);

  tags.forEach((tag, index) => {
    const gridYUnit = tagSlots[index];
    if (gridYUnit === undefined || !canOccupy(0, gridYUnit, 1, 1, occupancy, { cols: 6, rows: 20 })) {
      return;
    }

    addBlock({
      id: `${page.id}-tag-${index}`,
      type: 'interaction',
      subtype: 'text',
      gridX: 0,
      gridYUnit,
      gridW: 1,
      gridHUnit: 1,
      content: { text: tag, fontWeight: 700 },
      action: { type: 'tag', tag },
      color: pickFillerColor(palette),
      height: getContentBlockHeight(),
    });
  });

  for (let gridYUnit = 3; gridYUnit < 18; gridYUnit += randomBetween(0, 1) > 0.25 ? 2 : 1) {
    const gridHUnit = randomBetween(0, 1) > 0.25 ? 2 : 1;
    if (canOccupy(0, gridYUnit, 1, gridHUnit, occupancy, { cols: 6, rows: 20 })) {
      addBlock({
        id: `${page.id}-tag-filler-${gridYUnit}`,
        type: 'filler',
        subtype: 'decorative',
        gridX: 0,
        gridYUnit,
        gridW: 1,
        gridHUnit,
        content: null,
        action: null,
        modal: null,
        color: pickFillerColor(palette),
        height: getFillerBlockHeight(),
      });
    }
  }
}

function createProjectDetailFillers(occupancy, grid, palette) {
  const fillers = [];
  let fillerIndex = 0;
  const unitGrid = { cols: grid.cols, rows: grid.rows * 2 };

  for (let y = 0; y < unitGrid.rows; y += 1) {
    for (let x = 0; x < unitGrid.cols; x += 1) {
      if (x > 0 && y % 2 !== 0) {
        continue;
      }

      if (occupancy[y][x]) {
        continue;
      }

      const maxW = getMaxFreeWidth(x, y, occupancy, unitGrid);
      const gridW = randomInt(1, Math.min(maxW, 3));
      const maxH = getMaxFreeHeight(x, y, gridW, occupancy, unitGrid);
      const maxAllowedH = x === 0 ? Math.min(maxH, 4) : Math.floor(Math.min(maxH, 4) / 2) * 2;

      if (maxAllowedH < 1) {
        continue;
      }

      const gridHUnit =
        x === 0
          ? getBiasedTagColumnFillerHeight(maxAllowedH)
          : randomInt(1, Math.max(1, maxAllowedH / 2)) * 2;

      markOccupied(x, y, gridW, gridHUnit, occupancy);
      fillers.push({
        id: `project-detail-filler-${fillerIndex}`,
        type: 'filler',
        subtype: 'decorative',
        gridX: x,
        gridY: y / 2,
        gridW,
        gridH: gridHUnit / 2,
        height: getFillerBlockHeight(),
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

function getBiasedTagColumnFillerHeight(maxHUnit) {
  const preferFullBlock = randomBetween(0, 1) > 0.25;

  if (preferFullBlock && maxHUnit >= 2) {
    return randomInt(1, Math.max(1, Math.floor(maxHUnit / 2))) * 2;
  }

  return 1;
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

function createFillerBlocks(occupancy, grid, palette, page) {
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
      const filler = {
        id: `filler-${fillerIndex}`,
        type: 'filler',
        subtype: 'decorative',
        gridX: x,
        gridY: y,
        gridW,
        gridH,
        height: getFillerBlockHeight(),
        color: pickFillerColor(palette),
        content: null,
        action: null,
        modal: null,
      };

      if (isProjectsCarouselFiller(page, filler)) {
        filler.carouselDynamic = true;
      }

      fillers.push(filler);
      fillerIndex += 1;
    }
  }

  return fillers;
}

function isProjectsCarouselFiller(page, filler) {
  return (page.id === 'projects' || page.template === 'projectList') && filler.gridY >= 2 && filler.gridY <= 7;
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
        height: getFillerRingBlockHeight(),
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
    projectCounter: [
      [maxX, 2],
      [maxX, 1],
      [Math.max(0, maxX - 1), 2],
    ],
    projectRow1Title: [
      [0, 3],
      [1, 3],
      [0, 2],
    ],
    projectRow1TitleRight: [
      [1, 3],
      [2, 3],
      [1, 2],
    ],
    projectRow1TitleFarRight: [
      [2, 3],
      [1, 3],
      [2, 2],
    ],
    projectRow1ThumbLeft: [
      [0, 3],
      [0, 2],
      [1, 3],
    ],
    projectRow1ThumbLeftInset: [
      [1, 3],
      [1, 2],
      [0, 3],
    ],
    projectRow1Thumb: [
      [4, 3],
      [5, 3],
      [4, 2],
    ],
    projectRow1ThumbFarRight: [
      [5, 3],
      [5, 2],
      [4, 3],
    ],
    projectRow2Title: [
      [0, 4],
      [1, 4],
      [0, 5],
    ],
    projectRow2TitleRight: [
      [1, 4],
      [2, 4],
      [1, 5],
    ],
    projectRow2TitleFarRight: [
      [2, 4],
      [1, 4],
      [2, 5],
    ],
    projectRow2ThumbLeft: [
      [0, 4],
      [0, 5],
      [1, 4],
    ],
    projectRow2ThumbLeftInset: [
      [1, 4],
      [1, 5],
      [0, 4],
    ],
    projectRow2Thumb: [
      [4, 4],
      [5, 4],
      [4, 5],
    ],
    projectRow2ThumbFarRight: [
      [5, 4],
      [5, 5],
      [4, 4],
    ],
    projectRow3Title: [
      [0, 5],
      [1, 5],
      [0, 6],
    ],
    projectRow3TitleRight: [
      [1, 5],
      [2, 5],
      [1, 6],
    ],
    projectRow3TitleFarRight: [
      [2, 5],
      [1, 5],
      [2, 6],
    ],
    projectRow3ThumbLeft: [
      [0, 5],
      [0, 6],
      [1, 5],
    ],
    projectRow3ThumbLeftInset: [
      [1, 5],
      [1, 6],
      [0, 5],
    ],
    projectRow3Thumb: [
      [4, 5],
      [5, 5],
      [4, 6],
    ],
    projectRow3ThumbFarRight: [
      [5, 5],
      [5, 6],
      [4, 5],
    ],
    projectRow4Title: [
      [0, 6],
      [1, 6],
      [0, 7],
    ],
    projectRow4TitleRight: [
      [1, 6],
      [2, 6],
      [1, 7],
    ],
    projectRow4TitleFarRight: [
      [2, 6],
      [1, 6],
      [2, 7],
    ],
    projectRow4ThumbLeft: [
      [0, 6],
      [0, 7],
      [1, 6],
    ],
    projectRow4ThumbLeftInset: [
      [1, 6],
      [1, 7],
      [0, 6],
    ],
    projectRow4Thumb: [
      [4, 6],
      [5, 6],
      [4, 7],
    ],
    projectRow4ThumbFarRight: [
      [5, 6],
      [5, 7],
      [4, 6],
    ],
    projectRow5Title: [
      [0, 7],
      [1, 7],
      [0, 6],
    ],
    projectRow5TitleRight: [
      [1, 7],
      [2, 7],
      [1, 6],
    ],
    projectRow5TitleFarRight: [
      [2, 7],
      [1, 7],
      [2, 6],
    ],
    projectRow5ThumbLeft: [
      [0, 7],
      [0, 6],
      [1, 7],
    ],
    projectRow5ThumbLeftInset: [
      [1, 7],
      [1, 6],
      [0, 7],
    ],
    projectRow5Thumb: [
      [4, 7],
      [5, 7],
      [4, 6],
    ],
    projectRow5ThumbFarRight: [
      [5, 7],
      [5, 6],
      [4, 7],
    ],
    projectPrev: [
      [Math.max(0, centerX - 1), Math.max(0, maxY - 1)],
      [Math.max(0, centerX - 2), Math.max(0, maxY - 1)],
    ],
    projectNext: [
      [Math.min(maxX, centerX + 1), Math.max(0, maxY - 1)],
      [Math.min(maxX, centerX + 2), Math.max(0, maxY - 1)],
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

function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
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
  return type === 'filler' ? getFillerBlockHeight() : getContentBlockHeight();
}

function getContentBlockHeight() {
  return randomBetween(HEIGHT_RANGES.content.min, HEIGHT_RANGES.content.max);
}

function getFillerBlockHeight() {
  return randomBetween(HEIGHT_RANGES.filler.min, HEIGHT_RANGES.filler.max);
}

function getFillerRingBlockHeight() {
  return randomBetween(HEIGHT_RANGES.fillerRing.min, HEIGHT_RANGES.fillerRing.max);
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
