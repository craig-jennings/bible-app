import { setHeader } from '../actions/header';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChapterSelector from '../components/selectors/ChapterSelector';

function ChapterSelectorPage() {
  const { book } = useParams();

  useEffect(() => {
    setHeader(book);
  }, [book]);

  return <ChapterSelector book={book} />;
}

export default ChapterSelectorPage;
