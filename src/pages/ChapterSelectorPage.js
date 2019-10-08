import { setHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ChapterSelector from '../components/selectors/ChapterSelector';
import PropTypes from 'prop-types';

function ChapterSelectorPage({ book }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeader(book));
  }, [book, dispatch]);

  return <ChapterSelector book={book} />;
}

ChapterSelectorPage.propTypes = {
  book: PropTypes.string.isRequired,
};

export default ChapterSelectorPage;
