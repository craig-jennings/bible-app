import { useEffect } from 'react';
import { useHeaderActionsContext } from '@contexts/HeaderContext';
import Search from '@components/search/Search';

function SearchPage() {
  const { resetHeader } = useHeaderActionsContext();

  useEffect(() => void resetHeader(), [resetHeader]); // eslint-disable-line no-void

  return <Search />;
}

export default SearchPage;
