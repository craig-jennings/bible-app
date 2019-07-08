import '../errors/ba-404.js';
import { css, html, LitElement } from 'lit-element';
import { findBookByValue } from '../../data/findBook.js';
import base from '../../styles/base.js';
import formStyles from '../../styles/form.js';
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
    return [
      base,
      formStyles,
      selectorStyles,

      css`
        :host {
          padding: 1rem;
        }

        .form__input {
          margin-bottom: 1rem;
        }
      `,

    ];
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

    if (chapters.length === 0) {
      return html`<ba-404></ba-404>`;
    }

    return html`
      <div>
        <input
          aria-label="Chapter Search Field"
          class="form__input"
          placeholder="Find Chapter..."
          type="number"
          @input="${this.filterChapters}">
      </div>

      <div class="selector__list">
        ${chapters}
      </div>
    `;
  }

  firstUpdated() {
    const $input = this.renderRoot.querySelector('input');

    if ($input) {
      $input.focus();
    }
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
    const { chapterCount } = findBookByValue(this.book);
    const chapters = [];

    for (let i = 1; i <= chapterCount; i++) {
      chapters.push(`${i}`);
    }

    this._allChapters = chapters;
    this._chapters = chapters;
  }

  _constructChapterElement(chapter) {
    return html`
      <a class="selector__item" href="${this.book}/${chapter}">${chapter}</a>
    `;
  }
}

customElements.define(BibleAppChapterSelector.is, BibleAppChapterSelector);

export default BibleAppChapterSelector;
