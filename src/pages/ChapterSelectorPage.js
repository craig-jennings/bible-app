import { PropTypes } from 'react-recollect';
import { setHeader } from '../actions/header';
import { useEffect } from 'react';
import ChapterSelector from '../components/selectors/ChapterSelector';

function ChapterSelectorPage({ book }) {
  useEffect(() => {
    setHeader(book);
  }, [book]);

  return <ChapterSelector book={book} />;
}

ChapterSelectorPage.propTypes = {
  book: PropTypes.string.isRequired,
};

export default ChapterSelectorPage;
