import { connect } from 'pwa-helpers';
import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import store from '../../store.js';

class BibleAppPassage extends connect(store)(LitElement) {
  static get is() { return 'ba-passage'; }

  static get properties() {
    return {
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
          font-size: 1.25rem;
          margin: 0;
          padding: 0;
        }

        p {
          margin-bottom: 1rem;
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

        @media screen and (min-width: 1200px) {
          :host {
            margin: 0 auto;
            width: 40%;
          }
        }
      </style>
    `;
  }

  render() {
    const { _passage } = this;

    return html`
      ${BibleAppPassage.styles}

      <div>${unsafeHTML(_passage)}</div>
    `;
  }

  stateChanged({ passage }) {
    this._passage = passage;
  }
}

customElements.define(BibleAppPassage.is, BibleAppPassage);

export default BibleAppPassage;
