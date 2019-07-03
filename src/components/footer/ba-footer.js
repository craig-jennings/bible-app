import { css, html, LitElement } from 'lit-element';
import base from '../../styles/base.js';

class BibleAppFooter extends LitElement {
  static get is() { return 'ba-footer'; }

  static get styles() {
    return [
      base,

      css`
        div {
          background-color: var(--footer__bg-color);
          height: 100%;
          padding: 0 1rem;
        }

        small {
          font-style: italic;
        }

        @media screen and (min-width: 768px) {
          div.center-content {
            justify-content: flex-end;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="center-content">
        <small>All passages sourced from the ESV translation</small>
      </div>
    `;
  }
}

customElements.define(BibleAppFooter.is, BibleAppFooter);

export default BibleAppFooter;
