import { resetHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Search from '../components/search/Search';

function SearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetHeader());
  }, []);

  return <Search />;
}

export default SearchPage;
