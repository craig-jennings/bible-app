import { BookSelectorPage /* , ChapterSelector, Passage, Search */ } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
// import { Provider } from 'react-redux';
import GlobalStyles from './GlobalStyles';
// TODO
// import Notifications from './components/notifications/Notifications';
// import store from './store';

const App = () => (
  // <Provider store={store}>
  <>
    <GlobalStyles />

    <BrowserRouter>
      <Route exact path="/">
        <BookSelectorPage />
      </Route>

      {/* <Switch>
        <Route exact path="/search">
          <Search />
        </Route>

        <Route exact path="/:book">
          <ChapterSelector />
        </Route>
      </Switch>

      <Route exact path="/:book/:chapter">
        <Passage />
      </Route> */}

      {/* TODO: Handle unknown route */}

      {/* <Notifications /> */}
    </BrowserRouter>
  </>
  // </Provider>
);

export default hot(App);

// import './components/shell/ba-shell.js';
// import './service-worker/sw-installer.js';
// import './styles.css';
// import {
//   bookSelectorPage,
//   chapterSelectorPage,
//   passagePage,
//   searchPage,
//   unknownPage,
// } from './pages.js';
// import page from 'page';

// const LS_PATH_KEY = 'current:path';

// const render = (ctx) => {
//   document.querySelector('ba-shell').template = ctx.template;
// };

// const storeCurrentLocation = (ctx, next) => {
//   localStorage.setItem(LS_PATH_KEY, ctx.path);

//   next();
// };

// page('*', storeCurrentLocation);
// page('/', bookSelectorPage, render);
// page('/search', searchPage, render);
// page('/:book', chapterSelectorPage, render);
// page('/:book/:chapter', passagePage, render);
// page('*', unknownPage, render);

// const currentPath = localStorage.getItem(LS_PATH_KEY);

// if (currentPath) {
//   page.redirect(currentPath);
// }

// page.start();
