import '../footer/ba-footer.js';
import '../header/ba-header.js';
import '../notifications/ba-notifications.js';
import { connect } from 'pwa-helpers';
import { css, html, LitElement } from 'lit-element';
import base from '../../styles/base.js';
import store from '../../store.js';

class BibleAppShell extends connect(store)(LitElement) {
  static get is() { return 'ba-shell'; }

  static get properties() {
    return {
      _notifications: { type: Array },
      _page: { type: Object },
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
    const { _notifications, _page } = this;

    return html`
      <ba-header></ba-header>
      <div>${_page}</div>
      <ba-footer></ba-footer>
      <ba-notifications .notifications=${_notifications}></ba-notifications>
    `;
  }

  stateChanged({ notifications, page }) {
    this._notifications = notifications;
    this._page = page;
  }
}

customElements.define(BibleAppShell.is, BibleAppShell);

export default BibleAppShell;
