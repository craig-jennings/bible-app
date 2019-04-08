import ShadowComponent from '../utils/ShadowComponent.js';

function SearchResult(shadowSelector) {
  shadowSelector.link = (() => shadowSelector.find('a'))();

  return shadowSelector;
}

class SearchComponent extends ShadowComponent {
  get searchField() { return this.container.find('#search'); }

  get submitBtn() { return this.container.find('button'); }

  getAllResults() {
    return SearchResult(this.shadowFind('ba-search-item'));
  }

  getNthResult(n) {
    return SearchResult(this.shadowFind('ba-search-item').nth(n));
  }
}

export default SearchComponent;
