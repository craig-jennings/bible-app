import '../pagination/ba-pagination.js';
import './ba-search-item.js';
import 'wc-spinners/dist/orbit-spinner.js';
import { css, html, LitElement } from 'lit-element';
import base from '../../styles/base.js';
import connect from '../../utils/connect.js';
import formStyles from '../../styles/form.js';
import LoadState from '../../utils/LoadState.js';
import page from 'page';

const mapState = ({ search }) => ({ search });

class BibleAppSearch extends connect(mapState)(LitElement) {
  static get is() { return 'ba-search'; }

  static get styles() {
    return [
      base,
      formStyles,

      css`
        :host {
          padding: 1rem;
        }

        form input {
          margin-right: .5rem;
        }

        @media screen and (min-width: 768px) {
          form input {
            margin-right: 1rem;
          }
        }
      `,
    ];
  }

  render() {
    const { loadState, term } = this._state.search;
    const list = this._getList();
    const pagination = this._getPagination();

    return html`
      <form class="d-flex mb-3" @submit="${this._handeSubmit}">
        <input class="form__input" id="search" placeholder="Search..." value=${term}>
        <button class="form__button">Search</button>
      </form>

      <div>
        ${list}
      </div>

      <div>
        ${loadState === LoadState.LOADED ? pagination : ''}
      </div>
    `;
  }

  firstUpdated() {
    this.renderRoot.querySelector('#search').focus();
  }

  _getList() {
    const { loadState, results } = this._state.search;

    if (loadState === LoadState.LOADING) {
      return html`<orbit-spinner class="center-content" color="white"></orbit-spinner>`;
    }

    if (loadState === LoadState.LOADED && results.length === 0) {
      return html`<div class="center-content">No results</div>`;
    }

    return results.map(r => html`<ba-search-item .item=${r}></ba-search-item>`);
  }

  _getPagination() {
    const { pagination } = this._state.search;

    return html`
      <ba-pagination
        .pagination=${pagination}
        @next-click=${this._handleNextPage}
        @prev-click=${this._handlePrevPage}
      ></ba-pagination>
    `;
  }

  _handleNextPage(e) {
    e.preventDefault();

    const { loadState, pagination, term } = this._state.search;

    if (loadState !== LoadState.LOADED) return;

    if (pagination.page === pagination.totalPages) return;

    page(`/search?q=${term}&page=${pagination.page + 1}`);
  }

  _handlePrevPage(e) {
    e.preventDefault();

    const { loadState, pagination, term } = this._state.search;

    if (loadState !== LoadState.LOADED) return;

    if (pagination.page === 1) return;

    page(`/search?q=${term}&page=${pagination.page - 1}`);
  }

  _handeSubmit(e) {
    e.preventDefault();

    const term = this.renderRoot.querySelector('#search').value;

    page(`/search?q=${term}&page=1`);
  }
}

customElements.define(BibleAppSearch.is, BibleAppSearch);

export default BibleAppSearch;
