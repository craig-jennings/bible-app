import { html, LitElement } from '@polymer/lit-element';

class BibleApp404 extends LitElement {
  static get is() { return 'ba-404'; }

  static get styles() {
    return html`
      <style>
        div {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          width: 100%;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${BibleApp404.styles}

      <div>Unknown Passage</div>
    `;
  }
}

customElements.define(BibleApp404.is, BibleApp404);

export default BibleApp404;
