import '../footer/ba-footer.js';
import '../header/ba-header.js';
import { connect } from 'pwa-helpers';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class BibleAppShell extends connect(store)(LitElement) {
  static get is() { return 'ba-shell'; }

  static get properties() {
    return {
      _page: { type: Object },
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          display: grid;
          grid-template-rows: 3.5rem 1fr 1.5rem;
          min-height: 100vh;
        }
      </style>
    `;
  }

  render() {
    const { _page } = this;

    return html`
      ${BibleAppShell.styles}

      <ba-header></ba-header>
      <div>${_page}</div>
      <ba-footer></ba-footer>
    `;
  }

  stateChanged(state) {
    this._page = state.page;
  }
}

customElements.define(BibleAppShell.is, BibleAppShell);

export default BibleAppShell;
