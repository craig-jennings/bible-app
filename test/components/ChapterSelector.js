import ShadowComponent from './Component.js';

class ChapterSelector extends ShadowComponent {
  get filterInput() { return this.container.find('.filter-input'); }

  getAllChapters() {
    return this.container.find('.selector-item');
  }

  getNthChapter(n) {
    return this.container
      .find('.selector-item')
      .nth(n);
  }
}

export default ChapterSelector;
