import ShadowComponent from '../utils/ShadowComponent.js';

class SearchResult {
  constructor(container) {
    this.container = container;
  }

  get count() { return this.container.count; }

  get link() { return this.container.find('a'); }

  get textContent() { return this.container.textContent; }
}

class SearchComponent extends ShadowComponent {
  get searchField() { return this.container.find('#search'); }

  get submitBtn() { return this.container.find('button'); }

  getAllResults() {
    return new SearchResult(this.shadowFind('ba-search-item'));
  }

  getNthResult(n) {
    return new SearchResult(this.shadowFind('ba-search-item').nth(n));
  }
}

export default SearchComponent;
