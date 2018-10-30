import { html, LitElement } from '@polymer/lit-element';
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

        input {
          background-color: var(--bg-color);
          border-radius: .5rem;
          border: 2px solid var(--selector-input-border-color);
          color: var(--font-color);
          font-size: 1.25rem;
          line-height: 2rem;
          padding-left: 1rem;
          width: 100%;
          transition: border-color .15s;
        }

        input:focus {
          border-color: var(--selector-input-border-color--focus);
          outline: none;
        }
      </style>
    `;
  }

  constructor() {
    super();

    this._newTestamentBooks = NewTestament;
    this._oldTestamentBooks = OldTestament;
  }

  render() {
    const newTestamentBooks = this._newTestamentBooks.map(b => this._constructBookEl(b));
    const oldTestamentBooks = this._oldTestamentBooks.map(b => this._constructBookEl(b));

    return html`
      ${BibleAppBookSelector.styles}
      ${selectorStyles}

      <div>
        <input placeholder="Search..." @input="${this.filterBooks}">
      </div>

      <h1>Old Testament</h1>

      <div class="selector-list">
        ${oldTestamentBooks}
      </div>

      <h1>New Testament</h1>

      <div class="selector-list">
        ${newTestamentBooks}
      </div>
    `;
  }

  firstUpdated() {
    this.renderRoot.querySelector('input').focus();
  }

  filterBooks(e) {
    const term = e.target.value;

    if (term.trim().length === 0) {
      this._newTestamentBooks = NewTestament;
      this._oldTestamentBooks = OldTestament;
    } else {
      this._newTestamentBooks = NewTestament.filter(b => b.label.toLowerCase().indexOf(term) > -1);
      this._oldTestamentBooks = OldTestament.filter(b => b.label.toLowerCase().indexOf(term) > -1);
    }
  }

  _constructBookEl({ label, value }) {
    return html`
      <a class="selector-item" href="/${value}">${label}</a>
    `;
  }
}

customElements.define(BibleAppBookSelector.is, BibleAppBookSelector);

export default BibleAppBookSelector;
