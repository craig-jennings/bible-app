import { resetHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import Search from '../components/search/Search';

function SearchPage() {
  const dispatch = useDispatch();

  dispatch(resetHeader());

  return <Search />;
}

export default SearchPage;
