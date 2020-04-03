import { clearPassage, fetchPassage } from '../actions/passage';
import { setHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Passage from '../components/passage/Passage';
import PropTypes from 'prop-types';
import ScrollUp from '../components/scrollers/ScrollUp';

function PassagePage({ book, chapter }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeader(book, chapter));
    dispatch(fetchPassage({ book, chapter }));

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

PassagePage.propTypes = {
  book: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default PassagePage;
