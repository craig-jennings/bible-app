import { useEffect } from 'react';
import { useHeaderActions } from '@stores/headerStore';
import Search from '@components/search/Search';

function SearchPage() {
  const { resetHeader } = useHeaderActions();

  useEffect(() => void resetHeader(), [resetHeader]);

  return <Search />;
}

export default SearchPage;
