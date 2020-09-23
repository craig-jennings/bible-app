import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookSelectorPage from '../pages/BookSelectorPage';
import ChapterSelectorPage from '../pages/ChapterSelectorPage';
import Footer from './footer/Footer';
import Header from './header/Header';
import LocationTracker from './base/LocationTracker';
import Notifications from './notifications/Notifications';
import PassagePage from '../pages/PassagePage';
import SearchPage from '../pages/SearchPage';
import styled from 'styled-components';
import UnknownPage from '../pages/UnknownPage';

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

export default App;
