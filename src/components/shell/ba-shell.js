import '../footer/ba-footer.js';
import '../header/ba-header.js';
import '../notifications/ba-notifications.js';
import { css, html, LitElement } from 'lit-element';
import base from '../../styles/base.js';

class BibleAppShell extends LitElement {
  static get is() { return 'ba-shell'; }

  static get properties() {
    return {
      template: { type: Object },
    };
  }

  static get styles() {
    return [
      base,

      css`
        :host {
          display: grid;
          grid-template-rows: 3rem 1fr 1.5rem;
          min-height: 100vh;
        }
      `,
    ];
  }

  render() {
    return html`
      <ba-header></ba-header>
      <div>${this.template}</div>
      <ba-footer></ba-footer>
      <ba-notifications></ba-notifications>
    `;
  }
}

customElements.define(BibleAppShell.is, BibleAppShell);

export default BibleAppShell;
