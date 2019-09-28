import {
  BookSelectorPage,
  ChapterSelectorPage,
  PassagePage,
  SearchPage,
  UnknownPage,
} from './pages';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import history from './utils/history';
import Notifications from './components/notifications/Notifications';
import store from './store';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 1.5rem;
  min-height: 100vh;
`;

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Router history={history}>
        <Header />

        <Switch>
          <Route exact path="/">
            <BookSelectorPage />
          </Route>

          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/:book">
            <ChapterSelectorPage />
          </Route>

          <Route exact path="/:book/:chapter">
            <PassagePage />
          </Route>

          <Route>
            <UnknownPage />
          </Route>
        </Switch>

        <Notifications />
        <Footer />
      </Router>
    </AppContainer>
  </Provider>
);

export default hot(App);

// const LS_PATH_KEY = 'current:path';

// const storeCurrentLocation = (ctx, next) => {
//   localStorage.setItem(LS_PATH_KEY, ctx.path);

//   next();
// };

// page('*', storeCurrentLocation);
// page('*', unknownPage, render);

// const currentPath = localStorage.getItem(LS_PATH_KEY);

// if (currentPath) {
//   page.redirect(currentPath);
// }
