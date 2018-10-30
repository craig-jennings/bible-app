import { connect } from 'pwa-helpers';
import { html, LitElement } from '@polymer/lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import store from '../../store.js';

class BibleAppPassage extends connect(store)(LitElement) {
  static get is() { return 'ba-passage'; }

  static get properties() {
    return {
      _book: { type: String },
      _passage: { type: String },
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          display: block;
          margin: 0 1rem;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        p {
          margin-bottom: 1rem;
        }

        .chapter-num {
          float: left;
          font-size: 3rem;
          line-height: 3rem;
        }

        .verse-num {
          font-size: smaller;
          font-style: italic;
          vertical-align: super;
        }

        @media screen and (min-width: 768px) {
          :host {
            margin: 0 auto;
            width: 50%;
          }
        }
      </style>
    `;
  }

  render() {
    const { _book, _passage } = this;

    return html`
      ${BibleAppPassage.styles}

      <div>${unsafeHTML(_passage)}</div>
    `;
  }

  stateChanged({ passage, reference }) {
    this._passage = passage;
    this._book = reference.book;
  }
}

customElements.define(BibleAppPassage.is, BibleAppPassage);

export default BibleAppPassage;
