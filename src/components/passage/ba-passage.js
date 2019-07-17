import '../errors/ba-404.js';
import '../scrollers/ba-scrollup.js';
import 'wc-epic-spinners/dist/OrbitSpinner.js';
import { connect } from 'pwa-helpers';
import { css, html, LitElement } from 'lit-element';
import { decrementPassage, incrementPassage } from '../../actions/passage.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import base from '../../styles/base.js';
import Hammer from 'hammerjs';
import store from '../../store.js';

class BibleAppPassage extends connect(store)(LitElement) {
  static get is() { return 'ba-passage'; }

  static get properties() {
    return {
      _passage: { type: String },
    };
  }

  static get styles() {
    return [
      base,

      css`
        * {
          font-size: 1.25rem;
        }

        p {
          margin-bottom: 1rem;
        }

        .passage {
          width: 100%;
        }

        .verse-num {
          font-size: smaller;
          font-style: italic;
          vertical-align: super;
        }

        @media screen and (min-width: 768px) {
          .passage {
            margin: 0 auto;
            width: 50%;
          }
        }

        @media screen and (min-width: 1200px) {
          .passage {
            margin: 0 auto;
            width: 40%;
          }
        }
      `,
    ];
  }

  get $passage() { return this.renderRoot.querySelector('.passage'); }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._hammer) {
      this._hammer.destroy();
    }
  }

  render() {
    const { isLoaded, text } = this._passage;

    if (!isLoaded) {
      return html`
        <div class="spinner center-content mt-3">
          <orbit-spinner color="white"></orbit-spinner>
        </div>
      `;
    }

    if (isLoaded && text.length === 0) {
      return html`<ba-404></ba-404>`;
    }

    return html`
      <div class="passage">${unsafeHTML(text)}</div>
      <ba-scrollup></ba-scrollup>
    `;
  }

  updated() {
    if (!this.$passage) return;

    this._hammer = new Hammer(this.$passage, {
      cssProps: {
        userSelect: 'auto',
      },

      recognizers: [
        [Hammer.Swipe, {
          direction: Hammer.DIRECTION_LEFT | Hammer.DIRECTION_RIGHT, // eslint-disable-line no-bitwise
          threshold: 100,
          velocity: 0.5,
        }],
      ],
    });

    this._hammer.on('swipeleft', (e) => {
      if (e.pointerType === 'mouse') return;

      store.dispatch(incrementPassage());
    });

    this._hammer.on('swiperight', (e) => {
      if (e.pointerType === 'mouse') return;

      store.dispatch(decrementPassage());
    });
  }

  stateChanged({ passage }) {
    this._passage = passage;
  }
}

customElements.define(BibleAppPassage.is, BibleAppPassage);

export default BibleAppPassage;
