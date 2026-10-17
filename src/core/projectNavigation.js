const categoryIds = ['projects', 'experiments', 'teaching'];

export function getNewestProjectItems(page) {
  return [...(page?.projectItems ?? [])].reverse();
}

export function resolveCategoryPageId(pages, pageId) {
  if (!categoryIds.includes(pageId)) return pageId;

  const category = pages.find((page) => page.id === pageId);
  return getNewestProjectItems(category)[0]?.target ?? 'home';
}

export function getProjectNavigation(pages, pageId) {
  const category = pages.find(
    (page) => categoryIds.includes(page.id) && page.projectItems?.some((item) => item.target === pageId),
  );
  if (!category) return null;

  const items = getNewestProjectItems(category);
  const index = items.findIndex((item) => item.target === pageId);
  return {
    categoryId: category.id,
    index,
    count: items.length,
    previousPageId: items[(index - 1 + items.length) % items.length].target,
    nextPageId: items[(index + 1) % items.length].target,
  };
}
