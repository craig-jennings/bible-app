import {
  BookSelectorPage,
  ChapterSelectorPage,
  PassagePage,
  SearchPage,
  UnknownPage,
} from './pages';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { useRoutes } from 'hookrouter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Notifications from './components/notifications/Notifications';
import store from './store';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 1.5rem;
  min-height: 100vh;
`;

/* eslint-disable react/prop-types */
const routes = {
  '/': () => <BookSelectorPage />,
  '/search': () => <SearchPage />,
  '/:book': ({ book }) => <ChapterSelectorPage book={book} />,
  '/:book/:chapter': ({ book, chapter }) => <PassagePage book={book} chapter={chapter} />,
};
/* eslint-enable */

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        {routeResult || <UnknownPage />}
        <Notifications />
        <Footer />
      </AppContainer>
    </Provider>
  );
};

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
