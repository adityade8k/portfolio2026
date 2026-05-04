export class StateManager {
  constructor(pagesData, initialPageId = 'home') {
    this.pages = new Map(pagesData.pages.map((page) => [page.id, page]));
    this.currentPageId = initialPageId;
  }

  getCurrentPage() {
    return this.pages.get(this.currentPageId);
  }

  getPage(pageId) {
    return this.pages.get(pageId);
  }

  goToPage(pageId) {
    if (!this.pages.has(pageId)) {
      throw new Error(`Unknown page id: ${pageId}`);
    }

    this.currentPageId = pageId;
    return this.getCurrentPage();
  }
}
