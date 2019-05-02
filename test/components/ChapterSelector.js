import ShadowComponent from '../utils/ShadowComponent.js';

class ChapterSelector extends ShadowComponent {
  get chapters() { return this.container.find('.selector__item'); }

  get errorEl() { return this.container.find('ba-404'); }

  get filterInput() { return this.container.find('.form__input'); }
}

export default ChapterSelector;
