import '../components/passage/ba-passage.js';
import { dispatch } from '../store.js';
import { fetchPassage } from '../actions/passage.js';
import { html } from 'lit-html';
import { setHeader } from '../actions/header.js';

const template = html`<ba-passage class="mx-3"></ba-passage>`;

const passagePage = (ctx) => {
  const { book, chapter } = ctx.params;

  dispatch(setHeader(book, chapter));
  dispatch(fetchPassage(book, chapter));

  return template;
};

export default passagePage;
