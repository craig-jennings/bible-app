import { resetHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookSelector from '../components/selectors/BookSelector';

function BookSelectorPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetHeader());
  }, [dispatch]);

  return <BookSelector />;
}

export default BookSelectorPage;
