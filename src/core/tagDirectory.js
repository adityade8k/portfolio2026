import { normalizeTag } from './projectTags.js';
import { DEFAULT_PALETTE, pickFillerColor, randomBetween, randomInt } from './utils.js';

const CATEGORY_IDS = ['projects', 'experiments', 'teaching'];
const KIND_ORDER = { topic: 0, organization: 1, year: 2 };
const FONT_SIZE = 0.30;
const LINE_HEIGHT = 1.05;
const PADDING = 0.06;
const GLYPH_WIDTH = FONT_SIZE * 0.62;

export function createTagsPage(pagesData, { backTarget = 'home' } = {}) {
  const pages = Array.isArray(pagesData) ? pagesData : pagesData.pages ?? [];
  const pagesById = new Map(pages.map((page) => [page.id, page]));
  const catalog = new Map();
  const add = (value, kind) => {
    const rawLabel = typeof value === 'object' && value !== null ? value.label ?? value.id : value;
    if (rawLabel == null) return;
    const label = String(rawLabel).trim().replace(/\s+/g, ' ');
    const id = normalizeTag(typeof value === 'object' && value !== null ? value.id ?? label : label);
    if (!label || !id) return;
    const existing = catalog.get(id);
    // An explicit year or organization takes precedence over a duplicated topic.
    if (!existing || (existing.kind === 'topic' && kind !== 'topic')) catalog.set(id, { id, label, kind });
  };

  for (const categoryId of CATEGORY_IDS) {
    for (const item of pagesById.get(categoryId)?.projectItems ?? []) {
      const details = pagesById.get(item.target ?? item.id)?.projectDetails;
      if (!details) continue;
      const metadata = details.metadata ?? details.modal?.metadata ?? {};
      for (const value of details.tags ?? []) add(value, 'topic');
      for (const value of metadata.organizations ?? []) add(value, 'organization');
      for (const value of metadata.years ?? []) add(value, 'year');
    }
  }
  for (const value of pagesData.unassignedTags ?? []) add(value, 'topic');

  const tags = [...catalog.values()].sort((a, b) => {
    const kindDifference = KIND_ORDER[a.kind] - KIND_ORDER[b.kind];
    if (kindDifference) return kindDifference;
    if (a.kind === 'year') return b.label.localeCompare(a.label, 'en', { numeric: true });
    return a.label.localeCompare(b.label, 'en', { sensitivity: 'base' });
  });
  return { id: 'tags', template: 'tagDirectory', tags, backTarget };
}

function sizeTag(tag, grid) {
  const candidates = [];
  const words = tag.label.split(/\s+/);
  for (let width = 1; width <= 3; width++) {
    const availableWidth = width * grid.worldWidth / grid.cols - grid.gap - PADDING;
    if (words.some((word) => word.length * GLYPH_WIDTH > availableWidth)) continue;
    const lines = [''];
    for (const word of words) {
      const candidate = lines.at(-1) ? `${lines.at(-1)} ${word}` : word;
      if (lines.at(-1) && candidate.length * GLYPH_WIDTH > availableWidth) lines.push(word);
      else lines[lines.length - 1] = candidate;
    }
    const height = lines.length * FONT_SIZE * LINE_HEIGHT + PADDING + grid.gap;
    const units = Math.ceil(height / (grid.worldDepth / grid.rows / 2));
    if (units <= 2) candidates.push({ tag, width, units, lines });
  }
  candidates.sort((a, b) => a.width * a.units - b.width * b.units || a.lines.length - b.lines.length || a.width - b.width);
  if (!candidates.length) throw new RangeError(`Tag label cannot fit the directory at a readable size: ${tag.label}`);
  return candidates[0];
}

export function generateTagDirectoryLayout(page, grid, palette = DEFAULT_PALETTE) {
  if (grid.cols !== 6 || grid.rows !== 10) throw new RangeError('The tag directory requires a 6-column, 10-row frame.');
  const unitRows = grid.rows * 2;
  const occupancy = Array.from({ length: unitRows }, () => Array(grid.cols).fill(false));
  const blocks = [];
  const fits = (x, y, width, units) => x + width <= grid.cols && y + units <= unitRows
    && Array.from({ length: units }, (_, dy) => occupancy[y + dy].slice(x, x + width).every((cell) => !cell)).every(Boolean);
  const add = (block, y, units) => {
    if (!fits(block.gridX, y, block.gridW, units)) throw new RangeError(`Tag directory blocks overlap: ${block.id}`);
    for (let dy = 0; dy < units; dy++) for (let dx = 0; dx < block.gridW; dx++) occupancy[y + dy][block.gridX + dx] = true;
    blocks.push({ ...block, gridY: y / 2, gridH: units / 2 });
  };
  add({
    id: 'tags-back', type: 'interaction', subtype: 'text', gridX: 0, gridW: 1,
    height: 1.7, color: palette[0],
    content: { label: 'BACK', fontSize: FONT_SIZE, padding: PADDING, lineHeight: LINE_HEIGHT, fontWeight: 700 },
    action: { type: 'back', target: page.backTarget ?? 'home' },
  }, 0, 2);
  add({
    id: 'tags-title', type: 'content', subtype: 'header', gridX: 1, gridW: 4,
    height: 1.7, color: palette[0],
    content: { text: 'TAGS', fontSize: 0.6, fontWeight: 700, padding: 0.18, textAlign: 'left' },
  }, 0, 2);
  add({
    id: 'tags-top-accent', type: 'filler', gridX: 5, gridW: 1,
    height: randomBetween(1.1, 1.7), color: palette[1] ?? DEFAULT_PALETTE[1], content: null, action: null,
  }, 0, 2);

  // Shelves preserve the catalog's reading order. Short labels use half rows;
  // extra room gives selected tags a larger face without shrinking any type.
  const shelves = [];
  for (const tag of page.tags ?? []) {
    const sized = sizeTag(tag, grid);
    let shelf = shelves.at(-1);
    if (!shelf || shelf.width + sized.width > grid.cols) {
      shelf = { width: 0, units: 1, items: [] };
      shelves.push(shelf);
    }
    shelf.items.push(sized);
    shelf.width += sized.width;
    shelf.units = Math.max(shelf.units, sized.units);
  }
  const requiredUnits = shelves.reduce((sum, shelf) => sum + shelf.units, 0);
  if (requiredUnits > unitRows - 2) throw new RangeError('The complete tag catalog exceeds the directory frame.');
  const expandable = shelves.map((shelf, index) => ({ shelf, index })).filter(({ shelf }) => shelf.units === 1);
  const expandedCount = Math.min(unitRows - 2 - requiredUnits, expandable.length);
  for (let i = 0; i < expandedCount; i++) {
    const { shelf } = expandable[Math.floor((i + 0.5) * expandable.length / expandedCount)];
    shelf.units = 2;
    const prominent = [...shelf.items].sort((a, b) => b.width - a.width)[0];
    prominent.units = 2;
  }

  let y = 2;
  for (const shelf of shelves) {
    let x = 0;
    for (const item of shelf.items) {
      add({
        id: `tags-tag-${item.tag.id}`, type: 'interaction', subtype: 'tagDirectoryTag',
        gridX: x, gridW: item.width, height: 1.7, color: pickFillerColor(palette),
        tagKind: item.tag.kind,
        content: { text: item.lines.join('\n'), fontSize: FONT_SIZE, padding: PADDING, lineHeight: LINE_HEIGHT, fontWeight: 700 },
        action: { type: 'tag', tag: item.tag.id },
      }, y, item.units);
      x += item.width;
    }
    y += shelf.units;
  }

  let fillerIndex = 0;
  for (let row = 2; row < unitRows; row++) {
    for (let col = 0; col < grid.cols; col++) {
      if (occupancy[row][col]) continue;
      const shapes = [[1, 1], [1, 2], [2, 1], [2, 2], [3, 2]].filter(([width, units]) => fits(col, row, width, units));
      const [width, units] = shapes[randomInt(0, shapes.length - 1)];
      add({
        id: `tags-filler-${fillerIndex++}`, type: 'filler', gridX: col, gridW: width,
        height: randomBetween(0.9, 1.7), color: pickFillerColor(palette), content: null, action: null,
      }, row, units);
    }
  }
  return blocks;
}
