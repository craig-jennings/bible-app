import './components/errors/ba-404.js';
import './components/passage/ba-passage.js';
import './components/search/ba-search.js';
import './components/selectors/ba-book-selector.js';
import './components/selectors/ba-chapter-selector.js';
import { clearResults, queryTerm } from './actions/search.js';
import { dispatch } from './store.js';
import { fetchPassage } from './actions/passage.js';
import { html } from 'lit-html';
import { resetHeader, setHeader } from './actions/header.js';
import { setPage } from './actions/page.js';
import parseQueryString from './utils/parseQueryString.js';

const bookSelectorPage = () => {
  const template = html`<ba-book-selector class="p-3"></ba-book-selector>`;

  dispatch(resetHeader());
  dispatch(setPage(template));
};

const chapterSelectorPage = (ctx) => {
  const { book } = ctx.params;

  const template = html`<ba-chapter-selector class="p-3" .book=${book}></ba-chapter-selector>`;

  dispatch(setHeader(book));
  dispatch(setPage(template));
};

const passagePage = (ctx) => {
  const { book, chapter } = ctx.params;

  const template = html`<ba-passage class="mx-3"></ba-passage>`;

  dispatch(setHeader(book, chapter));
  dispatch(setPage(template));
  dispatch(fetchPassage(book, chapter));
};

const searchPage = (ctx) => {
  const params = parseQueryString(ctx.querystring);
  const template = html`<ba-search class="p-3"></ba-search>`;

  const { value: term } = params.find(p => p.key === 'q') || {};
  const { value: page } = params.find(p => p.key === 'page') || {};

  dispatch(resetHeader());
  dispatch(setPage(template));

  if (term) {
    dispatch(queryTerm(term, page));
  } else {
    dispatch(clearResults());
  }
};

const unknownPage = () => {
  const template = html`<ba-404></ba-404>`;

  dispatch(setPage(template));
};

export {
  bookSelectorPage,
  chapterSelectorPage,
  passagePage,
  searchPage,
  unknownPage,
};
