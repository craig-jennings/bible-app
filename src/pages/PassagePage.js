import 'wc-spinners/dist/orbit-spinner';
import { CenterBox } from '../components/base/Box';
import { fetchPassage } from '../api/passage';
import { findBookByValue } from '../data/findBook';
import { useEffect } from 'react';
import { useHeaderActionsContext } from '../contexts/HeaderContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Page404 from '../components/errors/Page404';
import Passage from '../components/passage/Passage';
import ScrollUp from '../components/scrollers/ScrollUp';
import WakeLock from '../components/base/WakeLock';

function PassagePage() {
  /* -- Hooks -- */
  const { book, chapter } = useParams();
  const { setHeader } = useHeaderActionsContext();
  const navigate = useNavigate();

  // eslint-disable-next-line no-void
  useEffect(() => void setHeader(book, chapter), [book, chapter, setHeader]);

  const { data: passage, status } = useQuery(
    ['passage', book, chapter],
    () => fetchPassage(book, chapter),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  );

  /* -- Event Handlers -- */
  const handleDecrement = () => {
    const bookDetails = findBookByValue(book);
    const chapterNumber = parseInt(chapter, 10);

    if (chapterNumber === 1) return;

    const newChapter = chapterNumber - 1;

    navigate(`/${bookDetails.value}/${newChapter}`);
  };

  const handleIncrement = () => {
    const bookDetails = findBookByValue(book);
    const chapterNumber = parseInt(chapter, 10);

    if (chapterNumber === bookDetails.chapterCount) return;

    const newChapter = chapterNumber + 1;

    navigate(`/${bookDetails.value}/${newChapter}`);
  };

  /* -- Rendering -- */
  switch (status) {
    case 'loading':
      return (
        <CenterBox>
          <orbit-spinner color="white" />
        </CenterBox>
      );

    case 'error':
      return <Page404 />;

    default:
      if (passage.length === 0) {
        return <Page404 />;
      }

      return (
        <>
          <Passage onDecrement={handleDecrement} onIncrement={handleIncrement} passage={passage} />
          <ScrollUp />
          <WakeLock />
        </>
      );
  }
}

export default PassagePage;
