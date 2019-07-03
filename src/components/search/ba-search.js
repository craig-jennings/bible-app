import '../pagination/ba-pagination.js';
import './ba-search-item.js';
import 'wc-epic-spinners/dist/OrbitSpinner.js';
import { connect } from 'pwa-helpers';
import { css, html, LitElement } from 'lit-element';
import base from '../../styles/base.js';
import formStyles from '../../styles/form.js';
import LoadState from '../../utils/LoadState.js';
import page from 'page';
import store from '../../store.js';

class BibleAppSearch extends connect(store)(LitElement) {
  static get is() { return 'ba-search'; }

  static get properties() {
    return {
      _loadState: { type: String },
    };
  }

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
    const list = this._getList();
    const pagination = this._getPagination();

    return html`
      <form class="d-flex mb-3" @submit="${this._handeSubmit}">
        <input class="form__input" id="search" placeholder="Search..." value=${this._term}>
        <button class="form__button">Search</button>
      </form>

      <div>
        ${list}
      </div>

      <div>
        ${this._loadState === LoadState.LOADED ? pagination : ''}
      </div>
    `;
  }

  firstUpdated() {
    this.renderRoot.querySelector('#search').focus();
  }

  stateChanged({ search }) {
    this._loadState = search.loadState;
    this._pagination = search.pagination;
    this._results = search.results;
    this._term = search.term;
  }

  _getList() {
    const { _loadState, _results } = this;

    if (_loadState === LoadState.LOADING) {
      return html`<orbit-spinner class="center-content" color="white"></orbit-spinner>`;
    }

    if (_loadState === LoadState.LOADED && _results.length === 0) {
      return html`<div class="center-content">No results</div>`;
    }

    return _results.map(r => html`<ba-search-item .item=${r}></ba-search-item>`);
  }

  _getPagination() {
    return html`
      <ba-pagination
        .pagination=${this._pagination}
        @nextclick=${this._handleNextPage}
        @prevclick=${this._handlePrevPage}
      ></ba-pagination>
    `;
  }

  _handleNextPage(e) {
    e.preventDefault();

    const { _loadState, _pagination, _term } = this;

    if (_loadState !== LoadState.LOADED) return;

    if (_pagination.page === _pagination.totalPages) return;

    page(`/search?q=${_term}&page=${_pagination.page + 1}`);
  }

  _handlePrevPage(e) {
    e.preventDefault();

    const { _loadState, _pagination, _term } = this;

    if (_loadState !== LoadState.LOADED) return;

    if (_pagination.page === 1) return;

    page(`/search?q=${_term}&page=${_pagination.page - 1}`);
  }

  _handeSubmit(e) {
    e.preventDefault();

    const term = this.renderRoot.querySelector('#search').value;

    page(`/search?q=${term}&page=1`);
  }
}

customElements.define(BibleAppSearch.is, BibleAppSearch);

export default BibleAppSearch;
