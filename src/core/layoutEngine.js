import { DEFAULT_PALETTE, pickFillerColor, randomBetween, randomInt } from './utils.js';
import { generateTagDirectoryLayout } from './tagDirectory.js';

export const TILE_GRID = Object.freeze({
  cols: 6,
  rows: 10,
  worldWidth: 7.2,
  worldDepth: 10,
  gap: 0.08,
});

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
  const grid = isMobile ? TILE_GRID : TILE_GRID;
  // TODO: Add desktop grid dimensions and placement tuning when the desktop design is defined.
  const palette = page.palette ?? DEFAULT_PALETTE;
  const fillerRings = options.fillerRings ?? 2;

  if (page.template === 'tagDirectory') {
    return generateTagDirectoryLayout(page, grid, palette).map((block) => addWorldRect(block, grid));
  }

  if (page.template === 'projectDetail') {
    const projectBlocks = generateProjectDetailLayout(page, grid, palette);
    const positioned = [...projectBlocks, ...createOuterFillerBlocks(grid, palette, fillerRings)].map((block) =>
      addWorldRect(block, grid),
    );
    return [...positioned, ...createHeroSurround(positioned, grid, palette)];
  }

  const occupancy = createOccupancy(grid.cols, grid.rows);
  const blocks = [];
  const authoredColors = new Map();
  for (const group of page.uniqueColorGroups ?? []) {
    const colors = shuffleArray(group.colors);
    group.blockIds.forEach((id, index) => {
      if (colors[index]) authoredColors.set(id, colors[index]);
    });
  }

  for (const authoredBlock of prioritizeBackBlocks(page.blocks ?? [])) {
    const block = authoredColors.has(authoredBlock.id)
      ? { ...authoredBlock, color: authoredColors.get(authoredBlock.id) }
      : authoredBlock;
    const placed = placeAuthoredBlock(block, occupancy, grid, palette);
    if (placed) {
      blocks.push(placed);
    }
  }

  blocks.push(...createFillerBlocks(occupancy, grid, palette, page));
  blocks.push(...createOuterFillerBlocks(grid, palette, fillerRings));

  return blocks.map((block) => addWorldRect(block, grid));
}

// Exact-aspect heroes can leave space inside their reserved slots. Fill that
// space explicitly because the infinite grid reserves the whole project frame.
function createHeroSurround(blocks, grid, palette) {
  const hero = blocks.find((block) => block.imageMaxDepth);
  if (!hero) return [];
  const slotW = hero.gridW * grid.worldWidth / grid.cols - grid.gap;
  const slotD = hero.gridH * grid.worldDepth / grid.rows - grid.gap;
  const sideWidth = (slotW - hero.worldW) / 2 - grid.gap;
  const endDepth = (slotD - hero.worldD) / 2 - grid.gap;
  const bands = [];
  if (sideWidth >= 0.1) {
    for (const side of [-1, 1]) bands.push({
      x: hero.worldX + side * (slotW - sideWidth) / 2, z: hero.worldZ,
      width: sideWidth, depth: Math.min(slotD, hero.worldD), vertical: true,
    });
  }
  if (endDepth >= 0.1) {
    for (const side of [-1, 1]) bands.push({
      x: hero.worldX, z: hero.worldZ + side * (slotD - endDepth) / 2,
      width: slotW, depth: endDepth, vertical: false,
    });
  }
  const fillers = [];
  for (const band of bands) {
    const extent = band.vertical ? band.depth : band.width;
    const cellSize = band.vertical ? grid.worldDepth / grid.rows : grid.worldWidth / grid.cols;
    const count = Math.max(1, Math.round((extent + grid.gap) / (2 * cellSize)));
    const size = (extent - (count - 1) * grid.gap) / count;
    for (let index = 0; index < count; index++) {
      const offset = -extent / 2 + size / 2 + index * (size + grid.gap);
      fillers.push({
        id: `${hero.id}-surround-${fillers.length}`, type: 'filler', subtype: 'heroSurround',
        worldX: band.x + (band.vertical ? 0 : offset), worldZ: band.z + (band.vertical ? offset : 0),
        worldW: band.vertical ? band.width : size, worldD: band.vertical ? size : band.depth,
        height: getFillerBlockHeight(), color: pickFillerColor(palette),
        content: null, action: null, modal: null,
      });
    }
  }
  return fillers;
}

function generateProjectDetailLayout(page, grid, palette) {
  const unitsPerRow = 2;
  const unitRows = grid.rows * unitsPerRow;
  const occupancy = createOccupancy(grid.cols, unitRows);
  const blocks = [];
  const details = page.projectDetails ?? {};
  const overview = details.presentation?.layout === 'overview';
  const [imageWidth = 1320, imageHeight = 740] = details.presentation?.imageSize ?? [];
  const imageAspect = imageWidth / imageHeight;
  // Square and portrait work uses the lower six rows, with controls beside it.
  const tallHero = overview && imageAspect <= 1.25;

  const addBlock = (block) => {
    if (!block.outsideProject) {
      markOccupied(block.gridX, block.gridYUnit, block.gridW, block.gridHUnit, occupancy);
    }
    blocks.push({
      ...block,
      gridY: block.gridYUnit / unitsPerRow,
      gridH: block.gridHUnit / unitsPerRow,
      height: block.height ?? (overview && !block.outsideProject ? 1.7 : getBlockHeight(block.type)),
      color: block.color ?? getAuthoredColor(block, palette),
    });
  };

  addBlock({
    id: `${page.id}-back`,
    type: 'interaction',
    subtype: 'text',
    gridX: 0,
    gridYUnit: page.projectNavigation || overview ? -2 : 0,
    outsideProject: Boolean(page.projectNavigation || overview),
    gridW: 1,
    gridHUnit: 2,
    content: { label: 'BACK', fontWeight: 700 },
    action: { type: 'back', target: page.projectNavigation?.backTarget },
  });

  addBlock({
    id: `${page.id}-title`,
    type: 'content',
    subtype: 'header',
    gridX: overview ? 2 : randomBetween(0, 1) > 0.5 ? 1 : 2,
    gridYUnit: 0,
    gridW: 4,
    gridHUnit: 4,
    content: { text: details.tileTitle ?? details.title ?? page.title ?? page.id, fontWeight: 700, textAlign: 'left', ...(overview ? { fontSize: 0.48, lineHeight: 1.05 } : {}) },
    color: palette[0],
  });

  if (!overview) addBlock({
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

  if (overview) {
    addStackedProjectTags({ page, details, grid, addBlock });
  } else {
    addProjectTagColumn({ page, details, blocks, occupancy, palette, addBlock });
  }

  addBlock({
    id: `${page.id}-hero`,
    type: 'content',
    subtype: 'image',
    gridX: overview ? 0 : 1,
    gridYUnit: overview ? 8 : 4,
    gridW: overview && !tallHero ? 6 : 4,
    gridHUnit: tallHero ? 12 : 8,
    imageAspectRatio: overview ? imageAspect : undefined,
    // Keep the image's own proportions within its reserved area. The landscape
    // allowance retains the existing cricket hero and its narrow normal seams.
    imageMaxDepth: overview ? (tallHero ? 6 - grid.gap : 4) : undefined,
    content: {
      src: details.image ?? '/images/project-placeholder.jpg',
      alt: details.imageAlt ?? `${details.title ?? page.id} hero image`,
      ...(overview ? { fit: 'contain', imageScale: 0.96 } : {}),
    },
    color: palette[0],
  });

  const textBlocks = details.textBlocks ?? [];
  if (textBlocks[0]) {
    addBlock({
      id: `${page.id}-text-wide`,
      type: 'content',
      subtype: 'text',
      gridX: overview ? 2 : 1,
      gridYUnit: overview ? 4 : 12,
      gridW: 4,
      gridHUnit: 4,
      content: { text: textBlocks[0], textAlign: 'left', fontWeight: overview ? 400 : 300, ...(overview ? { fontSize: 0.322, lineHeight: 1.2 } : {}) },
      color: palette[0],
    });
  }

  if (!overview && textBlocks[1]) {
    addBlock({
      id: `${page.id}-text-tall`,
      type: 'content',
      subtype: 'text',
      gridX: 1,
      gridYUnit: 16,
      gridW: 2,
      gridHUnit: 4,
      content: { text: textBlocks[1], textAlign: 'left', fontWeight: 300 },
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
      gridX: tallHero ? 4 : 3,
      gridYUnit: tallHero ? 14 : 18,
      gridW: tallHero ? 2 : 1,
      gridHUnit: 2,
      content: { label: details.link.label ?? 'LINK', fontWeight: 700 },
      action: { type: 'link', url: details.link.url },
    });
  }

  if (overview) {
    addProjectMetadata({
      page, details, grid, occupancy, addBlock,
      area: tallHero
        ? { x: 4, y: 8, w: 2, h: details.link?.url ? 6 : 8 }
        : { x: 0, y: 16, w: 4, h: 4 },
    });
  }

  if (page.projectNavigation) {
    const { index, count, pageIds, previousPageId, nextPageId } = page.projectNavigation;
    const navigationHeight = getContentBlockHeight();
    const navigationRow = {
      // Place the controls directly against the last project row.
      gridYUnit: grid.rows * unitsPerRow,
      gridHUnit: unitsPerRow,
      height: navigationHeight,
      outsideProject: true,
    };

    addBlock({
      ...navigationRow,
      id: `${page.id}-previous-project`,
      type: count > 1 ? 'interaction' : 'content',
      gridX: 1,
      gridW: 1,
      content: { label: 'PREV', iconSrc: '/icons/arrow-left.svg', fontWeight: 700 },
      action: count > 1 ? { type: 'project', target: previousPageId } : null,
    });
    const rowCount = count <= 10 ? 1 : count <= 20 ? 2 : 3;
    const cellWidth = grid.worldWidth / grid.cols;
    const cellDepth = grid.worldDepth / grid.rows;
    const singleRowDepth = (cellDepth - grid.gap) / 2;
    const indicatorHeightUnits = rowCount === 1
      ? ((singleRowDepth + grid.gap) / cellDepth) * unitsPerRow
      : unitsPerRow / rowCount;
    let pageIndex = 0;
    for (let row = 0; row < rowCount; row += 1) {
      // Balance the rows and stretch each one across the same button-bar space.
      const rowSize = Math.floor(count / rowCount) + (row < count % rowCount ? 1 : 0);
      const availableWidth = 2 * cellWidth - (rowCount > 1 ? grid.gap : 0);
      const indicatorGap = Math.min(grid.gap, availableWidth / rowSize * 0.2);
      const indicatorSpan = rowCount === 1
        ? 2 / rowSize
        : (availableWidth + indicatorGap) / rowSize / cellWidth;
      const rowStartX = rowCount === 1 ? 2 : 2 + (grid.gap - indicatorGap) / (2 * cellWidth);
      for (let column = 0; column < rowSize; column += 1, pageIndex += 1) {
        const target = pageIds[pageIndex];
        const isCurrentPage = pageIndex === index;
        addBlock({
          ...navigationRow,
          id: `${page.id}-page-${pageIndex + 1}`,
          type: 'interaction',
          subtype: 'pageIndicator',
          gridX: rowStartX + column * indicatorSpan,
          gridW: indicatorSpan,
          gridYUnit: rowCount === 1
            ? navigationRow.gridYUnit + unitsPerRow - indicatorHeightUnits
            : navigationRow.gridYUnit + row * indicatorHeightUnits,
          gridHUnit: indicatorHeightUnits,
          gapX: indicatorGap,
          pageIndex,
          isCurrentPage,
          height: navigationHeight + (isCurrentPage ? 0.24 : 0),
          content: null,
          action: { type: 'project', target },
          color: isCurrentPage ? DEFAULT_PALETTE[1 + pageIndex % 3] : palette[0],
        });
      }
    }
    addBlock({
      ...navigationRow,
      id: `${page.id}-next-project`,
      type: count > 1 ? 'interaction' : 'content',
      gridX: 4,
      gridW: 1,
      content: { label: 'NEXT', iconSrc: '/icons/arrow-right.svg', fontWeight: 700 },
      action: count > 1 ? { type: 'project', target: nextPageId } : null,
    });
    addBlock({
      ...navigationRow,
      id: `${page.id}-explore-tags`,
      type: 'interaction',
      subtype: 'text',
      gridX: 5,
      gridW: 1,
      content: { label: 'EXPLORE\nBY TAGS', fontSize: 0.2, lineHeight: 1.1, padding: 0.12, fontWeight: 700 },
      action: { type: 'state', target: 'tags' },
      color: palette[0],
    });
  }

  blocks.push(...createProjectDetailFillers(occupancy, grid, palette));
  return blocks;
}

function addStackedProjectTags({ page, details, grid, addBlock }) {
  const fontSize = 0.3;
  const compact = (details.tags?.length ?? 0) > 4;
  const padding = compact ? 0.08 : 0.16;
  const lineHeight = compact ? 1.1 : 1.2;
  const cellWidth = grid.worldWidth / grid.cols;
  const halfRowDepth = grid.worldDepth / grid.rows / 2;
  let gridYUnit = 0;

  for (const [index, tag] of (details.tags ?? []).entries()) {
    const words = tag.split(/\s+/);
    // Reserve enough width for the longest word, then grow vertically for wraps.
    const glyphWidth = fontSize * 0.62;
    const minimumWidth = Math.max(...words.map((word) => word.length)) * glyphWidth + padding;
    const gridW = Math.min(2, Math.max(1, Math.ceil((minimumWidth + grid.gap) / cellWidth), tag.length > 10 ? 2 : 1));
    const availableWidth = gridW * cellWidth - grid.gap - padding;
    const lines = [''];
    for (const word of words) {
      const line = lines.at(-1);
      const candidate = line ? `${line} ${word}` : word;
      if (line && candidate.length * glyphWidth > availableWidth) lines.push(word);
      else lines[lines.length - 1] = candidate;
    }
    const gridHUnit = Math.ceil((lines.length * fontSize * lineHeight + padding + grid.gap) / halfRowDepth);
    addBlock({
      id: `${page.id}-tag-${index}`,
      type: 'interaction',
      subtype: 'text',
      gridX: 0,
      gridYUnit,
      gridW,
      gridHUnit,
      content: { text: lines.join('\n'), fontWeight: 700, fontSize, lineHeight, padding },
      action: { type: 'tag', tag },
      color: pickFillerColor(page.palette ?? DEFAULT_PALETTE),
      height: 1.7,
    });
    gridYUnit += gridHUnit;
  }
}

function addProjectMetadata({ page, details, grid, occupancy, addBlock, area }) {
  const metadata = details.metadata ?? details.modal?.metadata ?? {};
  const values = [
    ...(metadata.years ?? []).map((value) => ({ value, kind: 'year' })),
    ...(metadata.organizations ?? []).map((value) => ({ value, kind: 'organization' })),
  ];
  const fontSize = 0.26;
  const lineHeight = 1.1;
  const padding = 0.12;
  const glyphWidth = fontSize * 0.62;
  const unitGrid = { cols: grid.cols, rows: grid.rows * 2 };
  values.forEach(({ value, kind }, index) => {
    const tag = typeof value === 'object' ? value.id ?? value.label : String(value);
    const label = (typeof value === 'object' ? value.label ?? value.id : String(value)).toUpperCase();
    const gridW = kind === 'year' ? 1 : Math.min(2, area.w);
    const availableWidth = gridW * grid.worldWidth / grid.cols - grid.gap - padding;
    const lines = [''];
    for (const word of label.split(/\s+/)) {
      const candidate = lines.at(-1) ? `${lines.at(-1)} ${word}` : word;
      if (lines.at(-1) && candidate.length * glyphWidth > availableWidth) lines.push(word);
      else lines[lines.length - 1] = candidate;
    }
    const gridHUnit = Math.ceil((lines.length * fontSize * lineHeight + padding + grid.gap) / (grid.worldDepth / grid.rows / 2));
    for (let y = area.y; y + gridHUnit <= area.y + area.h; y++) {
      for (let x = area.x; x + gridW <= area.x + area.w; x++) {
        if (!canOccupy(x, y, gridW, gridHUnit, occupancy, unitGrid)) continue;
        addBlock({
          id: `${page.id}-metadata-${index}`, type: 'interaction', subtype: 'metadata',
          gridX: x, gridYUnit: y, gridW, gridHUnit,
          content: { text: lines.join('\n'), fontSize, lineHeight, padding, fontWeight: 700 },
          action: { type: 'tag', tag }, metadataKind: kind,
          color: (page.palette ?? DEFAULT_PALETTE)[0], height: 1.7,
        });
        return;
      }
    }
    throw new Error(`No room for ${page.id} metadata: ${tag}`);
  });
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
      if (occupancy[y][x]) {
        continue;
      }

      const maxW = getMaxFreeWidth(x, y, occupancy, unitGrid);
      const gridW = randomInt(1, Math.min(maxW, 3));
      const maxH = getMaxFreeHeight(x, y, gridW, occupancy, unitGrid);
      const maxAllowedH = Math.min(maxH, 4);

      if (maxAllowedH < 1) {
        continue;
      }

      const gridHUnit = getBiasedTagColumnFillerHeight(maxAllowedH);

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
  const spanOptions = block.gridRect ? [block.gridRect.slice(2)] : SIZE_SPANS[block.size] ?? SIZE_SPANS.medium;

  for (const [gridW, gridH] of spanOptions) {
    const preferredPositions = block.gridRect
      ? [{ x: block.gridRect[0], y: block.gridRect[1] }]
      : getPreferredPositions(block.placement, grid, gridW, gridH);
    const fallbackPositions = block.gridRect ? [] : getAllPositions(grid, gridW, gridH);
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

function prioritizeBackBlocks(blocks) {
  return [...blocks].sort((a, b) => Number(isBackBlock(b)) - Number(isBackBlock(a)));
}

function isBackBlock(block) {
  return block.action?.type === 'back' || block.content?.label === 'BACK' || block.id?.endsWith('-back');
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
  const slotWidth = Math.max(0.01, block.gridW * cellW - (block.gapX ?? grid.gap));
  const worldW = block.imageAspectRatio && block.imageMaxDepth
    ? Math.min(slotWidth, block.imageMaxDepth * block.imageAspectRatio)
    : slotWidth;
  const worldD = block.imageAspectRatio
    ? worldW / block.imageAspectRatio
    : Math.max(0.1, block.gridH * cellD - grid.gap);

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
