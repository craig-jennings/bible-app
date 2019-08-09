import './components/shell/ba-shell.js';
import './service-worker/sw-installer.js';
import './styles.css';
import {
  bookSelectorPage,
  chapterSelectorPage,
  passagePage,
  searchPage,
  unknownPage,
} from './pages.js';
import page from 'page';

const render = (ctx) => {
  document.querySelector('ba-shell').template = ctx.template;
};

page('/', bookSelectorPage, render);
page('/search', searchPage, render);
page('/:book', chapterSelectorPage, render);
page('/:book/:chapter', passagePage, render);
page('*', unknownPage, render);

page.start();
