import 'wc-spinners/dist/orbit-spinner';
import { Box, CenterBox, InlineBox } from '../base/Box';
import { Form, FormButton, FormInput } from '../base/Form';
import { setTerm } from '../../actions/search';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoadState from '../../utils/LoadState';
import Pagination from '../pagination/Pagination';
import SearchItem from './SearchItem';

function getList(search) {
  const { loadState, results } = search;

  if (loadState === LoadState.LOADING) {
    return (
      <CenterBox>
        <orbit-spinner color="white" />
      </CenterBox>
    );
  }

  if (loadState === LoadState.LOADED && results.length === 0) {
    return <CenterBox data-testid="no-results">No results</CenterBox>;
  }

  return results.map((r) => <SearchItem item={r} key={r.reference} />);
}

function Search() {
  /* -- Hooks -- */
  const dispatch = useDispatch();
  const history = useHistory();
  const search = useSelector((state) => state.search);

  /* -- Event Handlers -- */
  const handleNextPage = () => {
    const { loadState, pagination, term } = search;

    if (loadState !== LoadState.LOADED) return;

    if (!pagination.hasNextPage) return;

    history.push(`/search?q=${term}&page=${pagination.page + 1}`);
  };

  const handlePrevPage = () => {
    const { loadState, pagination, term } = search;

    if (loadState !== LoadState.LOADED) return;

    if (!pagination.hasPrevPage) return;

    history.push(`/search?q=${term}&page=${pagination.page - 1}`);
  };

  const handleSearchChange = (e) => {
    dispatch(setTerm(e.target.value));
  };

  const handeSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${search.term}&page=1`);
  };

  const list = getList(search);

  return (
    <Box data-testid="search" p={3}>
      <Form mb={3} onSubmit={handeSubmit}>
        <FormInput
          autoFocus
          data-testid="search-input"
          onChange={handleSearchChange}
          value={search.term}
          placeholder="Search..."
        />

        <InlineBox ml={3}>
          <FormButton data-testid="search-submit" type="submit">
            Search
          </FormButton>
        </InlineBox>
      </Form>

      <div>{list}</div>

      {search.loadState === LoadState.LOADED && (
        <Pagination
          pagination={search.pagination}
          onNextClick={handleNextPage}
          onPrevClick={handlePrevPage}
        />
      )}
    </Box>
  );
}

export default Search;
