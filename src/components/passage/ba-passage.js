import '../errors/ba-404.js';
import 'wc-epic-spinners/dist/BreedingRhombusSpinner.js';
import { baseStyles, flexStyles } from '../../styles/base.js';
import { connect } from 'pwa-helpers';
import { css, html, LitElement } from 'lit-element';
import { decrementPassage, incrementPassage } from '../../actions/passage.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
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
      baseStyles,
      flexStyles,

      css`
        :host {
          margin: 0 1rem;
        }

        * {
          font-size: 1.25rem;
        }

        p {
          margin-bottom: 1rem;
        }

        .spinner {
          margin-top: 2rem;
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
      `,
    ];
  }

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
        <div class="spinner center-content">
          <breeding-rhombus-spinner color="white" size="48"></breeding-rhombus-spinner>
        </div>
      `;
    }

    if (isLoaded && text.length === 0) {
      return html`
        <ba-404></ba-404>
      `;
    }

    return html`
      <div class="passage">${unsafeHTML(text)}</div>
    `;
  }

  updated() {
    const $div = this.renderRoot.querySelector('.passage');

    if (!$div) return;

    this._hammer = new Hammer($div, {
      cssProps: {
        userSelect: 'auto',
      },

      recognizers: [
        [Hammer.Swipe, {
          direction: Hammer.DIRECTION_LEFT | Hammer.DIRECTION_RIGHT, // eslint-disable-line no-bitwise
          threshold: 200,
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
