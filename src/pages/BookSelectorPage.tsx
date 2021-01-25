import { useEffect } from 'react';
import { useHeaderActionsContext } from '../contexts/HeaderContext';
import BookSelector from '../components/selectors/BookSelector';

function BookSelectorPage() {
  const { resetHeader } = useHeaderActionsContext();

  useEffect(() => void resetHeader(), [resetHeader]);

  return <BookSelector />;
}

export default BookSelectorPage;
