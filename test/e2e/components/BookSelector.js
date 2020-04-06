import TestComponent, { byTestId } from '../utils/TestComponent';

class BookSelector extends TestComponent {
  static get testId() {
    return 'book-selector';
  }

  get filterInput() {
    return this.container.find(byTestId('book-selector-input'));
  }

  get books() {
    return this.container.find(byTestId('selector-list-item'));
  }
}

export default BookSelector;
