import './components/errors/ba-404.js';
import './components/passage/ba-passage.js';
import './components/selectors/ba-book-selector.js';
import './components/selectors/ba-chapter-selector.js';
import { fetchPassage } from './actions/passage.js';
import { html } from 'lit-html';
import { resetHeader, setHeader } from './actions/header.js';
import { setBook, setChapter } from './actions/reference.js';
import { setPage } from './actions/page.js';
import store from './store.js';

const bookSelectorTpl = html`
  <ba-book-selector></ba-book-selector>
`;

const chapterSelectorTpl = book => html`
  <ba-chapter-selector .book=${book}></ba-chapter-selector>
`;

const passageTpl = html`
  <ba-passage></ba-passage>
`;

const unknownTpl = html`
  <ba-404></ba-404>
`;

const bookSelectorPage = () => {
  store.dispatch(resetHeader());
  store.dispatch(setPage(bookSelectorTpl));
};

const chapterSelectorPage = (ctx) => {
  const { book } = ctx.params;

  store.dispatch(resetHeader());
  store.dispatch(setPage(chapterSelectorTpl(book)));
};

const passagePage = (ctx) => {
  const { book, chapter } = ctx.params;

  store.dispatch(setHeader(book));
  store.dispatch(setPage(passageTpl));
  store.dispatch(fetchPassage(book, chapter));
};

const unknownPage = () => {
  store.dispatch(setPage(unknownTpl));
};

export {
  bookSelectorPage,
  chapterSelectorPage,
  passagePage,
  unknownPage,
};
