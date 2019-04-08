import { baseStyles, flexStyles, unstyledStyles } from '../../styles/base.js';
import { clearResults } from '../../actions/search.js';
import { connect } from 'pwa-helpers';
import { css, html, LitElement } from 'lit-element';
import store from '../../store.js';

class BibleAppHeader extends connect(store)(LitElement) {
  static get is() { return 'ba-header'; }

  static get properties() {
    return {
      _header: { type: String },
    };
  }

  static get styles() {
    return [
      baseStyles,
      flexStyles,
      unstyledStyles,

      css`
        :host {
          background-color: var(--header__bg-color);
          color: var(--font-color);
          display: flex;
          padding: 0 1rem;
        }

        h1 {
          align-items: center;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        svg {
          fill: var(--font-color);
        }

        .separator {
          margin: 0 .5rem;
        }

        @media screen and (max-width: 767px) {
          .book {
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      `,
    ];
  }

  render() {
    const { _header } = this;

    const bookEl = _header.value ? html`<span class="separator">&gt;</span> <a class="book unstyled" href="/${_header.value}">${_header.label}</a>` : '';
    const chapterEl = _header.chapter ? html`<span class="separator">&gt;</span> <span class="chapter">${_header.chapter}</span>` : '';

    return html`
      <h1>
        <div class="center-content">
          <a class="unstyled" href="/">Bible</a> ${bookEl} ${chapterEl}
        </div>

        <a class="center-content unstyled" href="/search" @click=${this._handleSearchClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </a>
      </h1>
    `;
  }

  stateChanged({ header }) {
    this._header = header;
  }

  _handleSearchClick() {
    store.dispatch(clearResults());
  }
}

customElements.define(BibleAppHeader.is, BibleAppHeader);

export default BibleAppHeader;
