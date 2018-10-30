import './components/shell/ba-shell.js';
import { bookSelectorPage, chapterSelectorPage, passagePage, unknownPage } from './pages.js';
import page from 'page';
// import store from './store.js';

page('/', bookSelectorPage);
page('/:book', chapterSelectorPage);
page('/:book/:chapter', passagePage);
page('*', unknownPage);

// TODO
window.isSWUpdateAvailable.then((callback) => {
  // store.dispatch(addNotification('Update Available', false));

  setTimeout(callback, 5000);
});

page.start();
