import ShadowComponent from '../utils/ShadowComponent.js';

function SearchResult(shadowSelector) {
  Object.defineProperty(shadowSelector, 'link', {
    get() { return this.find('.reference'); },
  });

  return shadowSelector;
}

class SearchComponent extends ShadowComponent {
  get noResults() { return this.container.find('div .center-content'); }

  get searchField() { return this.container.find('#search'); }

  get submitBtn() { return this.container.find('button'); }

  get results() { return this.container.find('ba-search-item'); }

  getNthResult(n) {
    return SearchResult(this.shadowFind('ba-search-item').nth(n));
  }
}

export default SearchComponent;
