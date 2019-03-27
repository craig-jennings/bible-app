import ShadowComponent from '../utils/ShadowComponent.js';

class Passage extends ShadowComponent {
  get passage() {
    return this.container.find('div');
  }

  getNthVerse(n) {
    return this.container
      .find('.verse-num')
      .nth(n).addCustomDOMProperties({
        verseNumber: el => el.innerHTML,
        verseText: el => el.nextSibling.textContent,
      });
  }
}

export default Passage;
