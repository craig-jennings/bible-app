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

const LS_PATH_KEY = 'current:path';

const render = (ctx) => {
  document.querySelector('ba-shell').template = ctx.template;
};

const storeCurrentLocation = (ctx, next) => {
  localStorage.setItem(LS_PATH_KEY, ctx.path);

  next();
};

page('*', storeCurrentLocation);
page('/', bookSelectorPage, render);
page('/search', searchPage, render);
page('/:book', chapterSelectorPage, render);
page('/:book/:chapter', passagePage, render);
page('*', unknownPage, render);

const currentPath = localStorage.getItem(LS_PATH_KEY);

if (currentPath) {
  page.redirect(currentPath);
}

page.start();
