import { clearPassage, fetchPassage } from '../actions/passage';
import { setHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Passage from '../components/passage/Passage';
import ScrollUp from '../components/scrollers/ScrollUp';

function PassagePage() {
  const { book, chapter } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeader(book, chapter));
    dispatch(fetchPassage(book, chapter));

    return () => {
      dispatch(clearPassage());
    };
  }, [book, chapter, dispatch]);

  return (
    <>
      <Passage />
      <ScrollUp />
    </>
  );
}

export default PassagePage;
