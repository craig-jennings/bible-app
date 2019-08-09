import '../components/selectors/ba-chapter-selector.js';
import { dispatch } from '../store.js';
import { html } from 'lit-html';
import { setHeader } from '../actions/header.js';

const template = book => html`
  <ba-chapter-selector class="p-3" .book=${book}></ba-chapter-selector>
`;

const chapterSelectorPage = (ctx) => {
  const { book } = ctx.params;

  dispatch(setHeader(book));

  return template(book);
};


export default chapterSelectorPage;
