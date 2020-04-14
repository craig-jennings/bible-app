import { resetHeader } from '../actions/header';
import { useEffect } from 'react';
import Search from '../components/search/Search';

function SearchPage() {
  useEffect(() => {
    resetHeader();
  }, []);

  return <Search />;
}

export default SearchPage;
