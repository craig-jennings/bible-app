import TestComponent, { getSelectorByTestId } from '../utils/TestComponent';

class Passage extends TestComponent {
  static get testId() {
    return 'passage';
  }

  get errorEl() {
    return getSelectorByTestId('page-404');
  }

  getNthVerse(n) {
    return this.container
      .find('.verse-num')
      .nth(n)
      .addCustomDOMProperties({
        verseNumber: (el) => el.innerHTML,
        verseText: (el) => el.nextSibling.textContent,
      });
  }
}

export default Passage;
