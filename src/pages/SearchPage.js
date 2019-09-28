import { resetHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import parseQueryString from '../utils/parseQueryString';
import Search from '../components/search/Search';

function SearchPage() {
  const location = useLocation();
  const dispatch = useDispatch();

  const params = parseQueryString(location.search);

  const { value: page } = params.find((p) => p.key === 'page') || {};
  const { value: term } = params.find((p) => p.key === 'q') || {};

  dispatch(resetHeader());

  return <Search page={page} term={term} />;
}

export default SearchPage;
