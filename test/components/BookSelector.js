import ShadowComponent from '../utils/ShadowComponent.js';

class BookSelector extends ShadowComponent {
  get filterInput() { return this.container.find('.form__input'); }

  get books() { return this.container.find('.selector__item'); }
}

export default BookSelector;
