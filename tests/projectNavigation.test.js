import assert from 'node:assert/strict';
import test from 'node:test';
import { getNewestProjectItems, getProjectNavigation, resolveCategoryPageId } from '../src/core/projectNavigation.js';

const item = (target, extra = {}) => ({ target, ...extra });
const detail = (id, years) => ({ id, projectDetails: { metadata: { years } } });
const targets = (items) => items.map(({ target }) => target);

function freezeTree(value) {
  Object.freeze(value);
  Object.values(value).forEach((entry) => {
    if (entry && typeof entry === 'object' && !Object.isFrozen(entry)) freezeTree(entry);
  });
  return value;
}

test('gallery ordering uses the newest project year and puts undated projects last', () => {
  const category = { id: 'projects', projectItems: [item('recent'), item('old'), item('undated'), item('middle')] };
  const pages = [category, detail('recent', ['2026']), detail('old', [2019]), detail('undated', []), detail('middle', ['2024'])];
  assert.deepEqual(targets(getNewestProjectItems(category, pages)), ['recent', 'middle', 'old', 'undated']);
});

test('multiple years, full year ranges, and structured labels or IDs sort by their latest explicit year', () => {
  const category = { id: 'teaching', projectItems: [item('multiple'), item('range'), item('label'), item('id'), item('ongoing')] };
  const pages = [
    category,
    detail('multiple', ['2020', 2025, '2022']),
    detail('range', ['2021–2024']),
    detail('label', [{ label: '2023 / 2026' }]),
    detail('id', [{ id: 'year-2027', label: 'Commission' }]),
    detail('ongoing', ['2020–ongoing'])
  ];
  assert.deepEqual(targets(getNewestProjectItems(category, pages)), ['id', 'label', 'multiple', 'range', 'ongoing']);
});

test('equal years and undated projects retain reverse-authored order without mutating source items', () => {
  const category = { id: 'experiments', projectItems: [item('a'), item('unknown-a'), item('b'), item('unknown-b'), item('c')] };
  const pages = freezeTree([category, detail('a', ['2024']), detail('b', [2024]), detail('c', ['2024']), detail('unknown-a', []), detail('unknown-b', ['Ongoing'])]);
  const result = getNewestProjectItems(category, pages);
  assert.deepEqual(targets(result), ['c', 'b', 'a', 'unknown-b', 'unknown-a']);
  assert.deepEqual(targets(category.projectItems), ['a', 'unknown-a', 'b', 'unknown-b', 'c']);
  assert.equal(result[0], category.projectItems[4]);
});

test('item metadata and item years remain usable when no page collection is supplied', () => {
  const category = { projectItems: [
    item('metadata', { metadata: { years: ['2024'] } }),
    item('years', { years: [2026] }),
    item('year', { year: '2025' }),
    item('undated')
  ] };
  assert.deepEqual(targets(getNewestProjectItems(category)), ['years', 'year', 'metadata', 'undated']);
});

test('detail metadata takes precedence over item dates and modal metadata is a supported fallback', () => {
  const category = { id: 'projects', projectItems: [
    item('authoritative', { years: ['2030'] }), item('modal'), item('undated', { years: ['2040'] })
  ] };
  const pages = [
    category,
    detail('authoritative', ['2023']),
    { id: 'modal', projectDetails: { modal: { metadata: { years: ['2024'] } } } },
    detail('undated', [])
  ];
  assert.deepEqual(targets(getNewestProjectItems(category, pages)), ['modal', 'authoritative', 'undated']);
});

test('missing dates preserve legacy reverse order and empty categories fall back to Home', () => {
  assert.deepEqual(targets(getNewestProjectItems({ projectItems: [item('a'), item('b'), item('c')] })), ['c', 'b', 'a']);
  assert.deepEqual(getNewestProjectItems(), []);
  assert.deepEqual(getNewestProjectItems({ projectItems: [] }), []);
  assert.equal(resolveCategoryPageId([{ id: 'projects', projectItems: [] }], 'projects'), 'home');
  assert.equal(resolveCategoryPageId([], 'teaching'), 'home');
  assert.equal(resolveCategoryPageId([], 'about'), 'about');
});

test('entry targets, page indicators, and Next/Previous use the same chronological order with wraparound', () => {
  const category = { id: 'projects', projectItems: [item('new'), item('old'), item('middle')] };
  const pages = [category, detail('new', [2026]), detail('old', [2020]), detail('middle', [2024])];
  assert.equal(resolveCategoryPageId(pages, 'projects'), 'new');
  const expected = ['new', 'middle', 'old'];
  for (const [index, id] of expected.entries()) {
    const navigation = getProjectNavigation(pages, id);
    assert.equal(navigation.categoryId, 'projects');
    assert.equal(navigation.index, index);
    assert.equal(navigation.count, 3);
    assert.deepEqual(navigation.pageIds, expected);
    assert.equal(navigation.previousPageId, expected[(index + 2) % 3]);
    assert.equal(navigation.nextPageId, expected[(index + 1) % 3]);
  }
  assert.equal(getProjectNavigation(pages, 'about'), null);
});

test('a single dated project wraps to itself', () => {
  const category = { id: 'teaching', projectItems: [item('only')] };
  const navigation = getProjectNavigation([category, detail('only', [2026])], 'only');
  assert.equal(navigation.previousPageId, 'only');
  assert.equal(navigation.nextPageId, 'only');
  assert.equal(navigation.index, 0);
});
