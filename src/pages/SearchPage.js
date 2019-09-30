import { queryTerm } from '../actions/search';
import { resetHeader } from '../actions/header';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import parseQueryString from '../utils/parseQueryString';
import Search from '../components/search/Search';

function SearchPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const params = parseQueryString(location.search);

  const { value: page } = params.find((p) => p.key === 'page') || {};
  const { value: term } = params.find((p) => p.key === 'q') || {};

  dispatch(resetHeader());

  if (term) {
    dispatch(queryTerm(decodeURIComponent(term), page));
  }

  return <Search />;
}

export default SearchPage;
