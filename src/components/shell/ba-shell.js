import '../footer/ba-footer.js';
import '../header/ba-header.js';
import { connect } from 'pwa-helpers';
import { css, html, LitElement } from 'lit-element';
import store from '../../store.js';

class BibleAppShell extends connect(store)(LitElement) {
  static get is() { return 'ba-shell'; }

  static get properties() {
    return {
      _notification: { type: Object },
      _page: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-rows: 3rem 1fr 1.5rem;
        min-height: 100vh;
      }
    `;
  }

  render() {
    const { _notification, _page } = this;

    return html`
      <ba-header></ba-header>
      <div>${_page}</div>
      <ba-footer></ba-footer>
      <div>${_notification}</div>
    `;
  }

  stateChanged(state) {
    this._notification = state.notification.template;
    this._page = state.page;
  }
}

customElements.define(BibleAppShell.is, BibleAppShell);

export default BibleAppShell;
