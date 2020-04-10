import { resetHeader } from '../actions/header';
import { useEffect } from 'react';
import BookSelector from '../components/selectors/BookSelector';

function BookSelectorPage() {
  useEffect(() => {
    resetHeader();
  }, []);

  return <BookSelector />;
}

export default BookSelectorPage;
