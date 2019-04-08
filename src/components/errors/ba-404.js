import { baseStyles, flexStyles } from '../../styles/base.js';
import { css, html, LitElement } from 'lit-element';

class BibleApp404 extends LitElement {
  static get is() { return 'ba-404'; }

  static get styles() {
    return [
      baseStyles,
      flexStyles,

      css`
        div {
          height: 100%;
          width: 100%;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="center-content">Unknown Book or Chapter</div>
    `;
  }
}

customElements.define(BibleApp404.is, BibleApp404);

export default BibleApp404;
