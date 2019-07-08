import { css, html, LitElement } from 'lit-element';
import base from '../../styles/base.js';
import formStyles from '../../styles/form.js';
import NewTestament from '../../data/NewTestament.js';
import OldTestament from '../../data/OldTestament.js';
import selectorStyles from './selectorStyles.js';

class BibleAppBookSelector extends LitElement {
  static get is() { return 'ba-book-selector'; }

  static get properties() {
    return {
      _newTestamentBooks: { type: Array },
      _oldTestamentBooks: { type: Array },
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

        h1 {
          margin: .5rem 0;
          text-align: center;
        }
      `,
    ];
  }

  constructor() {
    super();

    this._newTestamentBooks = NewTestament;
    this._oldTestamentBooks = OldTestament;
  }

  render() {
    const newTestamentBooks = this._newTestamentBooks.map(b => this._constructBookElement(b));
    const oldTestamentBooks = this._oldTestamentBooks.map(b => this._constructBookElement(b));

    return html`
      <div>
        <input
          aria-label="Book Search Field"
          class="form__input"
          placeholder="Find Book..."
          @input="${this.filterBooks}">
      </div>

      <h1>Old Testament</h1>

      <div class="selector__list">
        ${oldTestamentBooks}
      </div>

      <h1>New Testament</h1>

      <div class="selector__list">
        ${newTestamentBooks}
      </div>
    `;
  }

  firstUpdated() {
    this.renderRoot.querySelector('input').focus();
  }

  filterBooks(e) {
    const term = e.target.value.toLowerCase();

    if (term.trim().length === 0) {
      this._newTestamentBooks = NewTestament;
      this._oldTestamentBooks = OldTestament;
    } else {
      this._newTestamentBooks = NewTestament.filter(b => b.label.toLowerCase().indexOf(term) > -1);
      this._oldTestamentBooks = OldTestament.filter(b => b.label.toLowerCase().indexOf(term) > -1);
    }
  }

  _constructBookElement({ label, value }) {
    return html`
      <a class="selector__item" href="/${value}">${label}</a>
    `;
  }
}

customElements.define(BibleAppBookSelector.is, BibleAppBookSelector);

export default BibleAppBookSelector;
