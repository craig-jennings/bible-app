import { useEffect } from 'react';
import { useHeaderActions } from '@stores/headerStore';
import BookSelector from '@components/selectors/BookSelector';

function BookSelectorPage() {
  const { resetHeader } = useHeaderActions();

  useEffect(() => void resetHeader(), [resetHeader]);

  return <BookSelector />;
}

export default BookSelectorPage;
