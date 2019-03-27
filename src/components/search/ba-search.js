import './ba-search-item.js';
import { baseStyles, blockStyles, flexStyles } from '../../styles/base.js';
import { connect } from 'pwa-helpers';
import { css, html, LitElement } from 'lit-element';
import { formStyles } from '../../styles/form.js';
import { queryTerm } from '../../actions/search.js';
import store from '../../store.js';

class BibleAppSearch extends connect(store)(LitElement) {
  static get is() { return 'ba-search'; }

  static get properties() {
    return {
      _results: { type: Array },
    };
  }

  static get styles() {
    return [
      baseStyles,
      blockStyles,
      flexStyles,
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
    const { _results } = this;

    const results = _results.map(r => html`<ba-search-item .item=${r}></ba-search-item>`);

    return html`
      <form class="d-flex" @submit="${this._handeSubmit}">
        <input class="form__input" id="search" placeholder="Search...">
        <button class="form__button">Search</button>
      </form>

      <div>
        ${results}
      </div>
    `;
  }

  firstUpdated() {
    this.renderRoot.querySelector('#search').focus();
  }

  stateChanged({ search }) {
    this._results = search.results;
  }

  _handeSubmit(e) {
    e.preventDefault();

    const term = this.renderRoot.querySelector('#search').value;

    store.dispatch(queryTerm(term));
  }
}

customElements.define(BibleAppSearch.is, BibleAppSearch);

export default BibleAppSearch;
