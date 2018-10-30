import { html, LitElement } from '@polymer/lit-element';

class BibleAppFooter extends LitElement {
  static get is() { return 'ba-footer'; }

  static get properties() {
    return {};
  }

  static get styles() {
    return html`
      <style>
        :host {
          align-items: center;
          background-color: var(--footer-bg-color);
          box-sizing: border-box;
          display: flex;
          height: 100%;
          justify-content: center;
          padding: 0 .5rem;
        }

        @media screen and (min-width: 768px) {
          :host {
            justify-content: flex-end;
          }
        }

        small {
          font-style: italic;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${BibleAppFooter.styles}

      <small>
        All passages sourced from the ESV translation
      </small>
    `;
  }
}

customElements.define(BibleAppFooter.is, BibleAppFooter);

export default BibleAppFooter;
