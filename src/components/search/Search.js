import 'wc-spinners/dist/orbit-spinner';
import { Box, CenterBox, InlineBox } from '../base/Box';
import { Form, FormButton, FormInput } from '../base/Form';
import { queryTerm } from '../../actions/search';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useFormInput } from '../../hooks';
import { useQueryParams } from 'hookrouter';
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
  const [queryParams, setQueryParams] = useQueryParams();

  const searchBuffer = useFormInput(queryParams.q || '');
  const search = useSelector((state) => state.search);

  useEffect(() => {
    if (queryParams.q) {
      dispatch(queryTerm(queryParams.q, queryParams.page));
    }
  }, [dispatch, queryParams.page, queryParams.q]);

  /* -- Event Handlers -- */
  const handleNextPage = () => {
    const { loadState, pagination } = search;

    if (loadState !== LoadState.LOADED) return;

    if (!pagination.hasNextPage) return;

    setQueryParams({ page: pagination.page + 1 });
  };

  const handlePrevPage = () => {
    const { loadState, pagination } = search;

    if (loadState !== LoadState.LOADED) return;

    if (!pagination.hasPrevPage) return;

    setQueryParams({ page: pagination.page - 1 });
  };

  const handeSubmit = (e) => {
    e.preventDefault();

    setQueryParams({
      page: 1,
      q: searchBuffer.value,
    });
  };

  const list = getList(search);

  return (
    <Box data-testid="search" p={3}>
      <Form mb={3} onSubmit={handeSubmit}>
        <FormInput autoFocus data-testid="search-input" placeholder="Search..." {...searchBuffer} />

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
