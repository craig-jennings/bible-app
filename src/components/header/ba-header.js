import { connect } from 'pwa-helpers';
import { html, LitElement } from '@polymer/lit-element';
import store from '../../store.js';

class BibleAppHeader extends connect(store)(LitElement) {
  static get is() { return 'ba-header'; }

  static get properties() {
    return {
      _label: { type: String },
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          align-items: center;
          background-color: var(--header-bg-color);
          box-sizing: border-box;
          color: var(--font-color);
          display: flex;
          justify-content: flex-start;
          padding: 0 1rem;
          width: 100%;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover,
        a:visited {
          text-decoration: none;
        }
      </style>
    `;
  }

  render() {
    const { _label } = this;

    // TODO: Make this into breadcrumb links
    // i.e. Bible > Genesis > 1
    return html`
      ${BibleAppHeader.styles}

      <h1>
        <a href="/">${_label}</a>
      </h1>
    `;
  }

  stateChanged({ header }) {
    this._label = header;
  }
}

customElements.define(BibleAppHeader.is, BibleAppHeader);

export default BibleAppHeader;
