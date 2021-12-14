import { useEffect } from 'react';
import { useHeaderActions } from '@stores/headerStore';
import { useParams } from 'react-router-dom';
import ChapterSelector from '@components/selectors/ChapterSelector';

function ChapterSelectorPage() {
  const { book = '' } = useParams();
  const { setHeader } = useHeaderActions();

  useEffect(() => void setHeader(book), [book, setHeader]);

  return <ChapterSelector book={book} />;
}

export default ChapterSelectorPage;
