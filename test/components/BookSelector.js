import { byTestId, selectorByTestId } from '../utils/selectByTestId';

class BookSelector {
  constructor() {
    this.container = selectorByTestId('book-selector');
  }

  get filterInput() {
    return this.container.find(byTestId('book-selector-input'));
  }

  get books() {
    return this.container.find(byTestId('selector-list-item'));
  }
}

export default BookSelector;
