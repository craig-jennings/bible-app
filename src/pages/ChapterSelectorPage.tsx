import { useEffect } from 'react';
import { useHeaderActionsContext } from '@contexts/HeaderContext';
import { useParams } from 'react-router-dom';
import ChapterSelector from '@components/selectors/ChapterSelector';

function ChapterSelectorPage() {
  const { book = '' } = useParams();
  const { setHeader } = useHeaderActionsContext();

  useEffect(() => void setHeader(book), [book, setHeader]);

  return <ChapterSelector book={book} />;
}

export default ChapterSelectorPage;
