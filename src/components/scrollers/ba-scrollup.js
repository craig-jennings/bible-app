import { baseStyles, flexStyles } from '../../styles/base.js';
import { css, html, LitElement } from 'lit-element';

class BibleAppScrollUp extends LitElement {
  static get is() { return 'ba-scrollup'; }

  static get styles() {
    return [
      baseStyles,
      flexStyles,

      css`
        div {
          background-color: var(--ba-scrollup__bg-color, #455a64);
          border-radius: 50%;
          bottom: 1.5rem;
          height: 3rem;
          opacity: .9;
          position: fixed;
          right: 1.5rem;
          transition: transform .15s ease-in-out;
          width: 3rem;
        }

        div.hide {
          transform: translateY(6rem);
        }

        span {
          line-height: 0;
        }

        svg {
          fill: var(--font-color, #fafafa);
        }
      `,
    ];
  }

  get $div() { return this.renderRoot.querySelector('div'); }

  render() {
    return html`
      <div class="center-content hide" @click=${this._handleClick}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </span>
      </div>
    `;
  }

  constructor() {
    super();

    this._scrollPosition = window.scrollY;
  }

  connectedCallback() {
    super.connectedCallback();

    this._callback = () => {
      if (this._scrollPosition < window.scrollY
          || window.scrollY === 0) {
        this.$div.classList.add('hide');
      } else {
        this.$div.classList.remove('hide');
      }

      this._scrollPosition = window.scrollY;
    };

    document.addEventListener('scroll', this._callback, { passive: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    document.removeEventListener('scroll', this._callback);
  }

  _handleClick() {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }
}

customElements.define(BibleAppScrollUp.is, BibleAppScrollUp);

export default BibleAppScrollUp;
