import ShadowComponent from '../utils/ShadowComponent.js';

class ChapterSelector extends ShadowComponent {
  get errorEl() { return this.container.find('ba-404'); }

  get filterInput() { return this.container.find('.form__input'); }


  getAllChapters() {
    return this.container.find('.selector__item');
  }

  getNthChapter(n) {
    return this.container
      .find('.selector__item')
      .nth(n);
  }
}

export default ChapterSelector;
