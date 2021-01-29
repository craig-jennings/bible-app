import TestComponent, { byTestId } from '../utils/TestComponent';

class ChapterSelector extends TestComponent {
  get filterInput() {
    return this.container.find(byTestId('chapter-selector-input'));
  }

  get chapters() {
    return this.container.find(byTestId('selector-list-item'));
  }
}

export default new ChapterSelector('chapter-selector');
export { ChapterSelector };
