import './components/notifications/ba-sw-update.js';
import './components/shell/ba-shell.js';
import './styles.css';
import {
  bookSelectorPage,
  chapterSelectorPage,
  passagePage,
  searchPage,
  unknownPage,
} from './pages.js';
import { html } from 'lit-html';
import { setNotification } from './actions/notification.js';
import page from 'page';
import store from './store.js';

page('/', bookSelectorPage);
page('/search', searchPage);
page('/:book', chapterSelectorPage);
page('/:book/:chapter', passagePage);
page('*', unknownPage);

page.start();

window.updateAvailable.then(() => {
  store.dispatch(setNotification(html`<ba-sw-update></ba-sw-update>`));
});
