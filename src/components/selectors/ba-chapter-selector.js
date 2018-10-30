import '../errors/ba-404.js';
import { html, LitElement } from '@polymer/lit-element';
import findBook from '../../data/findBook.js';
import selectorStyles from './selectorStyles.js';

class BibleAppChapterSelector extends LitElement {
  static get is() { return 'ba-chapter-selector'; }

  static get properties() {
    return {
      book: { type: String },
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          display: block;
          padding: 1rem;
        }

        h1 {
          margin-bottom: 1rem;
          text-align: center;
        }
      </style>
    `;
  }

  render() {
    const { book } = this;
    const chapters = [];

    const { chapterCount } = findBook(book);

    if (!chapterCount) {
      // Invalid book
      return html`<ba-404></ba-404>`;
    }

    for (let i = 1; i <= chapterCount; i++) {
      chapters.push(this._constructChapterEl(i));
    }

    return html`
      ${BibleAppChapterSelector.styles}
      ${selectorStyles}

      <div class="selector-list">
        ${chapters}
      </div>
    `;
  }

  _constructChapterEl(chapter) {
    return html`
      <a class="selector-item" href="${this.book}/${chapter}">${chapter}</a>
    `;
  }
}

customElements.define(BibleAppChapterSelector.is, BibleAppChapterSelector);

export default BibleAppChapterSelector;
