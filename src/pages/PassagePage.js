import { clearPassage, fetchPassage } from '../actions/passage';
import { setHeader } from '../actions/header';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Passage from '../components/passage/Passage';
import ScrollUp from '../components/scrollers/ScrollUp';

function PassagePage() {
  const { book, chapter } = useParams();

  useEffect(() => {
    clearPassage();
  }, []);

  useEffect(() => {
    setHeader(book, chapter);
    fetchPassage(book, chapter);
  }, [book, chapter]);

  return (
    <>
      <Passage />
      <ScrollUp />
    </>
  );
}

export default PassagePage;
