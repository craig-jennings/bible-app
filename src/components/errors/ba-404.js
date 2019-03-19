import { css, html, LitElement } from 'lit-element';

class BibleApp404 extends LitElement {
  static get is() { return 'ba-404'; }

  static get styles() {
    return css`
      :host         { display: block; }
      :host[hidden] { display: none; }

      div {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div>Unknown Passage</div>
    `;
  }
}

customElements.define(BibleApp404.is, BibleApp404);

export default BibleApp404;
