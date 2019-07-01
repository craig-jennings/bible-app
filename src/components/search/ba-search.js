import '../pagination/ba-pagination.js';
import './ba-search-item.js';
import 'wc-epic-spinners/dist/OrbitSpinner.js';
import { baseStyles, flexStyles, spacingStyles } from '../../styles/base.js';
import { connect } from 'pwa-helpers';
import { css, html, LitElement } from 'lit-element';
import { formStyles } from '../../styles/form.js';
import { nextPage, prevPage, queryTerm } from '../../actions/search.js';
import LoadState from '../../utils/LoadState.js';
import store from '../../store.js';

class BibleAppSearch extends connect(store)(LitElement) {
  static get is() { return 'ba-search'; }

  static get properties() {
    return {
      _loadState: { type: String },
      _results: { type: Array },
    };
  }

  static get styles() {
    return [
      baseStyles,
      flexStyles,
      formStyles,
      spacingStyles,

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
      <form class="d-flex mb-2" @submit="${this._handeSubmit}">
        <input class="form__input" id="search" placeholder="Search...">
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

    store.dispatch(nextPage());
  }

  _handlePrevPage(e) {
    e.preventDefault();

    store.dispatch(prevPage());
  }

  _handeSubmit(e) {
    e.preventDefault();

    const term = this.renderRoot.querySelector('#search').value;

    store.dispatch(queryTerm(term));
  }
}

customElements.define(BibleAppSearch.is, BibleAppSearch);

export default BibleAppSearch;
