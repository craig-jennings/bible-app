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
    return css`
      :host { display: block; }
      :host[hidden] { display: none; }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover,
      a:visited {
        text-decoration: none;
      }

      h1 {
        display: flex;
        width: 100%;
      }

      div {
        align-items: center;
        background-color: var(--header-bg-color);
        box-sizing: border-box;
        color: var(--font-color);
        display: flex;
        justify-content: flex-start;
        padding: 0 1rem;
        width: 100%;
      }

      span {
        margin: 0 .75rem;
      }

      @media screen and (max-width: 767px) {
        .book {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    `;
  }

  render() {
    const { _header } = this;

    const bookEl = _header.value ? html`<span>&gt;</span> <a class="book" href="/${_header.value}">${_header.label}</a>` : '';
    const chapterEl = _header.chapter ? html`<span>&gt;</span> ${_header.chapter}` : '';

    return html`
      <div>
        <h1>
          <a href="/">Bible</a> ${bookEl} ${chapterEl}
        </h1>
      </div>
    `;
  }

  stateChanged({ header }) {
    this._header = header;
  }
}

customElements.define(BibleAppHeader.is, BibleAppHeader);

export default BibleAppHeader;
