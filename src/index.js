import './components/shell/ba-shell.js';
import './styles.css';
import {
  bookSelectorPage,
  chapterSelectorPage,
  passagePage,
  searchPage,
  unknownPage,
} from './pages.js';
import page from 'page';

page('/', bookSelectorPage);
page('/search', searchPage);
page('/:book', chapterSelectorPage);
page('/:book/:chapter', passagePage);
page('*', unknownPage);

page.start();

window.updateAvailable.then(() => alert('Update available, please refresh'));
