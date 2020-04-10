import {
  BookSelectorPage,
  ChapterSelectorPage,
  PassagePage,
  SearchPage,
  UnknownPage,
} from '../pages';
import { hot } from 'react-hot-loader/root';
import { navigate, useRoutes } from 'hookrouter';
import { useEffect } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Notifications from './notifications/Notifications';
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

const LS_PATH_KEY = 'current:path';

const storeCurrentLocation = (location) => {
  localStorage.setItem(LS_PATH_KEY, location);
};

const currentPath = localStorage.getItem(LS_PATH_KEY);

if (currentPath) {
  navigate(currentPath);
}

const App = () => {
  const routeResult = useRoutes(routes);

  useEffect(() => {
    storeCurrentLocation(window.location.pathname);
  });

  return (
    <AppContainer>
      <Header />
      {routeResult || <UnknownPage />}
      <Notifications />
      <Footer />
    </AppContainer>
  );
};

export default hot(App);
