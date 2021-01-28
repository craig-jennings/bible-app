import TestComponent, { byTestId } from '../utils/TestComponent';

class BookSelector extends TestComponent {
  get filterInput() {
    return this.container.find(byTestId('book-selector-input'));
  }

  get books() {
    return this.container.find(byTestId('selector-list-item'));
  }
}

export default new BookSelector('book-selector');
export { BookSelector };
