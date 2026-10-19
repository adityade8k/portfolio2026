const categoryIds = ['projects', 'experiments', 'teaching'];

function latestYear(value) {
  if (Array.isArray(value)) {
    return value.reduce((latest, entry) => Math.max(latest, latestYear(entry)), -Infinity);
  }
  if (value && typeof value === 'object') {
    return Math.max(latestYear(value.id), latestYear(value.label));
  }
  // Use explicit four-digit years, including both ends of a year range.
  // An undated or ongoing label alone does not imply the current year.
  const years = String(value ?? '').match(/(?<!\d)\d{4}(?!\d)/g);
  return years ? Math.max(...years.map(Number)) : -Infinity;
}

export function getNewestProjectItems(page, pages = []) {
  const detailsById = new Map(pages.map((detailPage) => [detailPage.id, detailPage.projectDetails]));
  // Keep the existing reverse-authored order as the tie-breaker.
  return [...(page?.projectItems ?? [])].reverse()
    .map((item, order) => {
      const details = detailsById.get(item.target);
      const years = details?.metadata?.years ?? details?.modal?.metadata?.years
        ?? item.metadata?.years ?? item.years ?? item.year;
      return { item, order, year: latestYear(years) };
    })
    .sort((a, b) => a.year === b.year ? a.order - b.order : b.year - a.year)
    .map(({ item }) => item);
}

export function resolveCategoryPageId(pages, pageId) {
  if (!categoryIds.includes(pageId)) return pageId;

  const category = pages.find((page) => page.id === pageId);
  return getNewestProjectItems(category, pages)[0]?.target ?? 'home';
}

export function getProjectNavigation(pages, pageId) {
  const category = pages.find(
    (page) => categoryIds.includes(page.id) && page.projectItems?.some((item) => item.target === pageId),
  );
  if (!category) return null;

  const items = getNewestProjectItems(category, pages);
  const index = items.findIndex((item) => item.target === pageId);
  return {
    categoryId: category.id,
    index,
    count: items.length,
    pageIds: items.map((item) => item.target),
    previousPageId: items[(index - 1 + items.length) % items.length].target,
    nextPageId: items[(index + 1) % items.length].target,
  };
}
