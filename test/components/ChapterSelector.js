import { byTestId, selectorByTestId } from '../utils/selectByTestId';

class ChapterSelector {
  constructor() {
    this.container = selectorByTestId('chapter-selector');
  }

  get errorEl() {
    return selectorByTestId('page-404');
  }

  get filterInput() {
    return this.container.find(byTestId('chapter-selector-input'));
  }

  get chapters() {
    return this.container.find(byTestId('selector-list-item'));
  }
}

export default ChapterSelector;
