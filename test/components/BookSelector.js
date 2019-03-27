import ShadowComponent from '../utils/ShadowComponent.js';

class BookSelector extends ShadowComponent {
  get filterInput() { return this.container.find('.form__input'); }

  getAllBooks() {
    return this.container.find('.selector__item');
  }

  getNthBook(n) {
    return this.container
      .find('.selector__item')
      .nth(n);
  }
}

export default BookSelector;
