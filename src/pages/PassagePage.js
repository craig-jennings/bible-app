import { clearPassage, fetchPassage } from '../actions/passage';
import { PropTypes } from 'react-recollect';
import { setHeader } from '../actions/header';
import { useEffect } from 'react';
import Passage from '../components/passage/Passage';
import ScrollUp from '../components/scrollers/ScrollUp';

function PassagePage({ book, chapter }) {
  useEffect(() => {
    setHeader(book, chapter);
    fetchPassage(book, chapter);

    return () => {
      clearPassage();
    };
  }, [book, chapter]);

  return (
    <>
      <Passage />
      <ScrollUp />
    </>
  );
}

PassagePage.propTypes = {
  book: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default PassagePage;
