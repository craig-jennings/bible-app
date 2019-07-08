import { css, html, LitElement } from 'lit-element';
import base from '../../styles/base.js';
import classNames from 'classnames';

class BibleAppPagination extends LitElement {
  static get is() { return 'ba-pagination'; }

  static get properties() {
    return {
      pagination: { type: Object },
    };
  }

  static get styles() {
    return [
      base,

      css`
        .page-btn {
          background-color: transparent;
          color: inherit;
          border-radius: .5rem;
          border: 1px solid var(--selector__border-color);
          cursor: pointer;
          padding: .5rem .75rem;
          transition: background-color .1s ease-in-out;
        }

        .page-btn:hover,
        .page-btn:focus {
          background-color: var(--selector__border-color);
          outline: none;
        }

        .page-btn.disabled {
          cursor: not-allowed;
          opacity: .5;
        }

        .page-btn.disabled:hover,
        .page-btn.disabled:focus {
          background-color: inherit;
          outline: none;
        }
      `,
    ];
  }

  render() {
    const { endRange, hasNextPage, hasPrevPage, startRange, totalResults } = this.pagination;

    const nextBtnClasses = classNames('page-btn', { disabled: !hasNextPage });
    const prevBtnClasses = classNames('page-btn', { disabled: !hasPrevPage });

    const range = html`${startRange} - ${endRange} of ${totalResults}`;

    return html`
      <div class="d-flex justify-between">
        <button
          class="${prevBtnClasses}"
          type="button"
          ?disabled=${!hasPrevPage}
          @click=${this._handlePrevPage}
        >Previous</button>

        <div class="range">
          ${totalResults > 0 ? range : ''}
        </div>

        <button
          class="${nextBtnClasses}"
          type="button"
          ?disabled=${!hasNextPage}
          @click=${this._handleNextPage}
        >Next</button>
      </div>
    `;
  }

  _dispatchEvent(name) {
    const event = new CustomEvent(name);

    this.dispatchEvent(event);
  }

  _handleNextPage(e) {
    e.preventDefault();

    this._dispatchEvent('next-click');
  }

  _handlePrevPage(e) {
    e.preventDefault();

    this._dispatchEvent('prev-click');
  }
}

customElements.define(BibleAppPagination.is, BibleAppPagination);

export default BibleAppPagination;
