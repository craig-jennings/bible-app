import { resetHeader } from '../actions/header';
import Search from '../components/search/Search';

function SearchPage() {
  resetHeader();

  return <Search />;
}

export default SearchPage;
