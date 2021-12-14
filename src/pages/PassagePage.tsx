import 'wc-spinners/dist/orbit-spinner';
import { CenterBox } from '@components/common/Box';
import { fetchPassage } from '@api/passage';
import { findBookByValue } from '@data/findBook';
import { useEffect } from 'react';
import { useHeaderActions } from '@stores/headerStore';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Page404 from '@components/errors/Page404';
import Passage from '@components/passage/Passage';
import ScrollUp from '@components/scrollers/ScrollUp';
import WakeLock from '@components/common/WakeLock';

function PassagePage() {
  /* -- Hooks -- */
  const { book = '', chapter = '' } = useParams();
  const { setHeader, setSticky } = useHeaderActions();
  const navigate = useNavigate();

  useEffect(() => void setHeader(book, chapter), [book, chapter, setHeader]);

  useEffect(() => {
    setSticky(true);

    return () => setSticky(false);
  });

  const { data: passage, status } = useQuery(['passage', book, chapter], () => fetchPassage(book, chapter));

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
      if (!passage?.length) {
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
