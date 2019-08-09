import '../components/search/ba-search.js';
import { clearResults, queryTerm } from '../actions/search.js';
import { dispatch } from '../store.js';
import { html } from 'lit-html';
import { resetHeader } from '../actions/header.js';
import parseQueryString from '../utils/parseQueryString.js';

const template = html`<ba-search class="p-3"></ba-search>`;

const searchPage = (ctx) => {
  const params = parseQueryString(ctx.querystring);

  const { value: page } = params.find(p => p.key === 'page') || {};
  const { value: term } = params.find(p => p.key === 'q') || {};

  dispatch(resetHeader());

  if (term) {
    dispatch(queryTerm(term, page));
  } else {
    dispatch(clearResults());
  }

  return template;
};

export default searchPage;
