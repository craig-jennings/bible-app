import 'wc-spinners/dist/orbit-spinner';
import { CenterBox } from '../components/base/Box';
import { fetchPassage } from '../api/passage';
import { findBookByValue } from '../data/findBook';
import { setHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Page404 from '../components/errors/Page404';
import Passage from '../components/passage/Passage';
import ScrollUp from '../components/scrollers/ScrollUp';

function PassagePage() {
  /* -- Hooks -- */
  const { book, chapter } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setHeader(book, chapter));
  }, [book, chapter, dispatch]);

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
        </>
      );
  }
}

export default PassagePage;
