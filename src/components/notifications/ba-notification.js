import { baseStyles } from '../../styles/base.js';
import { css, html, LitElement } from 'lit-element';

class BibleAppNotification extends LitElement {
  static get is() { return 'ba-notification'; }

  static get styles() {
    return [
      baseStyles,

      css`
        div {
          bottom: 2rem;
          height: 4rem;
          left: 1.5rem;
          position: fixed;
          right: 1.5rem;
          z-index: 100;
        }

        @media screen and (min-width: 768px) {
          div {
            left: 2rem;
            right: unset;
            width: 300px;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(BibleAppNotification.is, BibleAppNotification);

export default BibleAppNotification;
