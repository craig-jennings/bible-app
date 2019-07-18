import './components/notifications/ba-sw-update.js';
import './components/shell/ba-shell.js';
import './styles.css';
import { addNotification } from './actions/notifications.js';
import {
  bookSelectorPage,
  chapterSelectorPage,
  passagePage,
  searchPage,
  unknownPage,
} from './pages.js';
import { dispatch } from './store.js';
import { html } from 'lit-html';
import page from 'page';

page('/', bookSelectorPage);
page('/search', searchPage);
page('/:book', chapterSelectorPage);
page('/:book/:chapter', passagePage);
page('*', unknownPage);

page.start();

window.updateAvailable.then(() => {
  dispatch(addNotification(html`<ba-sw-update></ba-sw-update>`));
});
