import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import LocationTracker from '@common/LocationTracker';
import Notifications from '@components/notifications/Notifications';
import styled from 'styled-components';

const BookSelectorPage = lazy(() => import('@pages/BookSelectorPage'));
const ChapterSelectorPage = lazy(() => import('@pages/ChapterSelectorPage'));
const PassagePage = lazy(() => import('@pages/PassagePage'));
const SearchPage = lazy(() => import('@pages/SearchPage'));
const UnknownPage = lazy(() => import('@pages/UnknownPage'));

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 1.5rem;
  min-height: 100%;
`;

const App = () => (
  <AppContainer>
    <BrowserRouter>
      <Header />

      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<BookSelectorPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:book" element={<ChapterSelectorPage />} />
          <Route path="/:book/:chapter" element={<PassagePage />} />
          <Route path="*" element={<UnknownPage />} />
        </Routes>
      </Suspense>

      <Footer />
      <LocationTracker />
      <Notifications />
    </BrowserRouter>
  </AppContainer>
);

export default App;
