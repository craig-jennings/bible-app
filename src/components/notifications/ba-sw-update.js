import { css, html, LitElement } from 'lit-element';
import base from '../../styles/base.js';

class BibleAppSWUpdate extends LitElement {
  static get is() { return 'ba-sw-update'; }

  static get styles() {
    return [
      base,

      css`
        button {
          background-color: var(--notification__button__bg-color, #eaeaea);
          border-radius: .5rem;
          border-style: none;
          color: var(--font-color);
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          line-height: 1.5rem;
          margin-left: 3rem;
          padding: 8px 12px;
          transition: background-color 0.1s ease-in-out;
        }

        button:focus,
        button:hover {
          background-color: var(--notification__button__bg-color--hover, #dddddd);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="d-flex justify-between align-center">
        <span>Update Available.</span>
        <button @click=${this._handleRefreshClick} type="button">Refresh?</button>
      </div>
    `;
  }

  _handleRefreshClick() {
    window.location.reload();
  }
}

customElements.define(BibleAppSWUpdate.is, BibleAppSWUpdate);

export default BibleAppSWUpdate;
