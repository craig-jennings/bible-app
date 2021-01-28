import TestComponent, { byTestId, getSelectorByTestId } from '../utils/TestComponent';

class ChapterSelector extends TestComponent {
  get errorEl() {
    return getSelectorByTestId('page-404');
  }

  get filterInput() {
    return this.container.find(byTestId('chapter-selector-input'));
  }

  get chapters() {
    return this.container.find(byTestId('selector-list-item'));
  }
}

export default new ChapterSelector('chapter-selector');
export { ChapterSelector };
