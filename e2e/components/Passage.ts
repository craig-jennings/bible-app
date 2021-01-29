import TestComponent from '../utils/TestComponent';

interface Verse extends Selector {
  verseNumber: Promise<any>;
  verseText: Promise<any>;
}

class Passage extends TestComponent {
  getNthVerse(n: number) {
    return <Verse> this.container
      .find('.verse-num')
      .nth(n)
      .addCustomDOMProperties({
        verseNumber: (el) => el.innerHTML,
        verseText: (el) => el.nextSibling?.textContent,
      });
  }
}

export default new Passage('passage');
export { Passage };
