import ShadowComponent from './Component.js';

class BookSelector extends ShadowComponent {
  get filterInput() { return this.container.find('.filter-input'); }

  getAllBooks() {
    return this.container.find('.selector-item');
  }

  getNthBook(n) {
    return this.container
      .find('.selector-item')
      .nth(n);
  }
}

export default BookSelector;
