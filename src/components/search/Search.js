import 'wc-spinners/dist/orbit-spinner';
import { Box, CenterBox, InlineBox } from '../base/Box';
import { clearResults, queryTerm } from '../../actions/search';
import { Form, FormButton, FormInput } from '../base/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useFormInput } from '../../hooks';
import history from '../../utils/history';
import LoadState from '../../utils/LoadState';
import Pagination from '../pagination/Pagination';
import PropTypes from 'prop-types';
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

function Search({ page, term }) {
  /* -- Hooks -- */
  const searchInput = useFormInput(term);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (term) {
      dispatch(queryTerm(term, page));
    } else {
      dispatch(clearResults());
    }
  }, [dispatch, page, term]);

  useEffect(() => {
    searchInput.onChange({ target: { value: term } });
  }, [term]);

  /* -- Event Handlers -- */
  const handleNextPage = () => {
    const { loadState, pagination } = search;

    if (loadState !== LoadState.LOADED) return;

    if (pagination.page === pagination.totalPages) return;

    history.push(`/search?q=${searchInput.value}&page=${pagination.page + 1}`);
  };

  const handlePrevPage = () => {
    const { loadState, pagination } = search;

    if (loadState !== LoadState.LOADED) return;

    if (pagination.page === 1) return;

    history.push(`/search?q=${searchInput.value}&page=${pagination.page - 1}`);
  };

  const handeSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${searchInput.value}&page=1`);
  };

  const list = getList(search);

  return (
    <Box data-testid="search" p={3}>
      <Form mb={3} onSubmit={handeSubmit}>
        <FormInput autoFocus data-testid="search-input" placeholder="Search..." {...searchInput} />

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

Search.defaultProps = {
  page: '1',
  term: '',
};

Search.propTypes = {
  page: PropTypes.string,
  term: PropTypes.string,
};

export default Search;
