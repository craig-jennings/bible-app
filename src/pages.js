import './components/errors/ba-404.js';
import './components/passage/ba-passage.js';
import './components/search/ba-search.js';
import './components/selectors/ba-book-selector.js';
import './components/selectors/ba-chapter-selector.js';
import { fetchPassage } from './actions/passage.js';
import { html } from 'lit-html';
import { resetHeader, setHeader } from './actions/header.js';
import { setPage } from './actions/page.js';
import store from './store.js';

const { dispatch } = store;

const searchPage = () => {
  const searchTpl = html`<ba-search></ba-search>`;

  dispatch(resetHeader());
  dispatch(setPage(searchTpl));
};

const bookSelectorPage = () => {
  const bookSelectorTpl = html`<ba-book-selector></ba-book-selector>`;

  dispatch(resetHeader());
  dispatch(setPage(bookSelectorTpl));
};

const chapterSelectorPage = (ctx) => {
  const { book } = ctx.params;

  const chapterSelectorTpl = html`<ba-chapter-selector .book=${book}></ba-chapter-selector>`;

  dispatch(setHeader(book));
  dispatch(setPage(chapterSelectorTpl));
};

const passagePage = (ctx) => {
  const { book, chapter } = ctx.params;

  const passageTpl = html`<ba-passage></ba-passage>`;

  dispatch(setHeader(book, chapter));
  dispatch(setPage(passageTpl));
  dispatch(fetchPassage(book, chapter));
};

const unknownPage = () => {
  const unknownTpl = html`<ba-404></ba-404>`;

  dispatch(setPage(unknownTpl));
};

export {
  bookSelectorPage,
  chapterSelectorPage,
  passagePage,
  searchPage,
  unknownPage,
};
