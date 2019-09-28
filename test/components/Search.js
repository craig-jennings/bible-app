import { byTestId, selectorByTestId } from '../utils/selectByTestId';

class SearchItem {
  constructor(container) {
    this.container = container;
  }

  get reference() {
    return this.container.find(byTestId('reference'));
  }
}

class Search {
  constructor() {
    this.container = selectorByTestId('search');
  }

  get noResults() {
    return this.container.find(byTestId('no-results'));
  }

  get searchField() {
    return this.container.find(byTestId('search-input'));
  }

  get submitBtn() {
    return this.container.find(byTestId('search-submit'));
  }

  get results() {
    return this.container.find(byTestId('search-item'));
  }

  getNthResult(n) {
    return new SearchItem(this.results.nth(n));
  }
}

export default Search;
