import { BookSelectorPage, ChapterSelectorPage, PassagePage /* , SearchPage */ } from './pages';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import history from './history';
import store from './store';
import styled from 'styled-components';
// TODO
// import Header from './components/header/Header';
// import Notifications from './components/notifications/Notifications';

const AppContainer = styled.div`
  display: grid;
  /* grid-template-rows: 3rem 1fr 1.5rem; */
  grid-template-rows: 1fr 1.5rem;
  min-height: 100vh;
`;

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Router history={history}>
        {/* <Header /> */}

        <Route exact path="/">
          <BookSelectorPage />
        </Route>

        <Switch>
          {/* <Route exact path="/search">
            <Search />
          </Route> */}

          <Route exact path="/:book">
            <ChapterSelectorPage />
          </Route>
        </Switch>

        <Route exact path="/:book/:chapter">
          <PassagePage />
        </Route>

        {/* TODO: Handle unknown route */}

        {/* <Notifications /> */}
        <Footer />
      </Router>
    </AppContainer>
  </Provider>
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
