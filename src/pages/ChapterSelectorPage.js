import { setHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChapterSelector from '../components/selectors/ChapterSelector';

function ChapterSelectorPage() {
  const { book } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeader(book));
  }, [book, dispatch]);

  return <ChapterSelector book={book} />;
}

export default ChapterSelectorPage;
