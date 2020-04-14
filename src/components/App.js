import {
  BookSelectorPage,
  ChapterSelectorPage,
  PassagePage,
  SearchPage,
  UnknownPage,
} from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Footer from './footer/Footer';
import Header from './header/Header';
import LocationTracker from './base/LocationTracker';
import Notifications from './notifications/Notifications';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 1.5rem;
  min-height: 100vh;
`;

const App = () => (
  <AppContainer>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<BookSelectorPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:book" element={<ChapterSelectorPage />} />
        <Route path="/:book/:chapter" element={<PassagePage />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>

      <Footer />
      <LocationTracker />
      <Notifications />
    </BrowserRouter>
  </AppContainer>
);

export default hot(App);
