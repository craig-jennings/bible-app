import { css, html, LitElement } from 'lit-element';

class BibleAppFooter extends LitElement {
  static get is() { return 'ba-footer'; }

  static get styles() {
    return css`
      :host { display: block; }
      :host[hidden] { display: none; }

      div {
        align-items: center;
        background-color: var(--footer-bg-color);
        box-sizing: border-box;
        display: flex;
        height: 100%;
        justify-content: center;
        padding: 0 .5rem;
      }

      @media screen and (min-width: 768px) {
        div {
          justify-content: flex-end;
        }
      }

      small {
        font-style: italic;
      }
    `;
  }

  render() {
    return html`
      <div>
        <small>All passages sourced from the ESV translation</small>
      </div>
    `;
  }
}

customElements.define(BibleAppFooter.is, BibleAppFooter);

export default BibleAppFooter;
