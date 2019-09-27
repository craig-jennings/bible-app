import '../errors/Page404.js/index.js';
import '../scrollers/ba-scrollup.js';
import 'wc-spinners/dist/orbit-spinner.js';
import { css, html, LitElement } from 'lit-element';
import { decrementPassage, incrementPassage } from '../../actions/passage.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import base from '../../styles/base.js';
import connect from '../../utils/connect.js';
import Hammer from 'hammerjs';

const mapState = ({ passage }) => ({ passage });

const mapActions = {
  decrementPassage,
  incrementPassage,
};

class BibleAppPassage extends connect(
  mapState,
  mapActions,
)(LitElement) {
  static get is() {
    return 'ba-passage';
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

  get $passage() {
    return this.renderRoot.querySelector('.passage');
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._hammer) {
      this._hammer.destroy();
    }
  }

  render() {
    const { isLoaded, text } = this._state.passage;

    if (!isLoaded) {
      return html`
        <div class="spinner center-content mt-3">
          <orbit-spinner color="white"></orbit-spinner>
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
        [
          Hammer.Swipe,
          {
            direction: Hammer.DIRECTION_LEFT | Hammer.DIRECTION_RIGHT, // eslint-disable-line no-bitwise
            threshold: 100,
            velocity: 0.5,
          },
        ],
      ],
    });

    this._hammer.on('swipeleft', (e) => {
      if (e.pointerType === 'mouse') return;

      this._actions.incrementPassage();
    });

    this._hammer.on('swiperight', (e) => {
      if (e.pointerType === 'mouse') return;

      this._actions.decrementPassage();
    });
  }
}

customElements.define(BibleAppPassage.is, BibleAppPassage);

export default BibleAppPassage;
