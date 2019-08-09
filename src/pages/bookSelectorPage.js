import '../components/selectors/ba-book-selector.js';
import { dispatch } from '../store.js';
import { html } from 'lit-html';
import { resetHeader } from '../actions/header.js';

const template = html`<ba-book-selector class="p-3"></ba-book-selector>`;

const bookSelectorPage = () => {
  dispatch(resetHeader());

  return template;
};

export default bookSelectorPage;
