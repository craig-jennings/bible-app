import { selectorByTestId } from '../utils/selectByTestId';

class Passage {
  constructor() {
    this.container = selectorByTestId('passage');
  }

  get errorEl() {
    return selectorByTestId('page-404');
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
