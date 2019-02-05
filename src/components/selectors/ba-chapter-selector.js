import '../errors/ba-404.js';
import { html, LitElement } from 'lit-element';
import findBook from '../../data/findBook.js';
import selectorStyles from './selectorStyles.js';

class BibleAppChapterSelector extends LitElement {
  static get is() { return 'ba-chapter-selector'; }

  static get properties() {
    return {
      _chapters: { type: Array },
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

        .filter-input {
          margin-bottom: 1rem;
        }
      </style>
    `;
  }

  constructor() {
    super();

    this._chapters = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this._buildAllChapters();
  }

  update(changedProperties) {
    if (changedProperties.get('book')) {
      this._buildAllChapters();
    }

    super.update();
  }

  render() {
    const chapters = this._chapters.map(c => this._constructChapterElement(c));

    return html`
      ${BibleAppChapterSelector.styles}
      ${selectorStyles}

      <div>
        <input class="filter-input" placeholder="Search..." type="number" @input="${this.filterChapters}">
      </div>

      <div class="selector-list">
        ${chapters}
      </div>
    `;
  }

  firstUpdated() {
    this.renderRoot.querySelector('input').focus();
  }

  filterChapters(e) {
    const term = e.target.value;

    if (term.trim().length === 0) {
      this._chapters = this._allChapters;
    } else {
      this._chapters = this._allChapters.filter(c => c.indexOf(term) > -1);
    }
  }

  _buildAllChapters() {
    const { chapterCount } = findBook(this.book);
    const chapters = [];

    for (let i = 1; i <= chapterCount; i++) {
      chapters.push(`${i}`);
    }

    this._allChapters = chapters;
    this._chapters = chapters;
  }

  _constructChapterElement(chapter) {
    return html`
      <a class="selector-item" href="${this.book}/${chapter}">${chapter}</a>
    `;
  }
}

customElements.define(BibleAppChapterSelector.is, BibleAppChapterSelector);

export default BibleAppChapterSelector;
