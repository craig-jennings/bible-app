import 'wc-spinners/dist/orbit-spinner';
import { Box, CenterBox, InlineBox } from '../base/Box';
import { Form, FormButton, FormInput } from '../base/Form';
import { search } from '../../api/search';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import SearchItem from './SearchItem';
import useFormInput from '../../hooks/useFormInput';

function getList(status, results) {
  if (!results) return null;

  if (status === 'loading') {
    return (
      <CenterBox>
        <orbit-spinner color="white" />
      </CenterBox>
    );
  }

  if (status === 'success' && results.length === 0) {
    return <CenterBox data-testid="no-results">No results</CenterBox>;
  }

  return results.map((r) => <SearchItem item={r} key={r.reference} />);
}

function Search() {
  /* -- Hooks -- */
  const [searchParams, setSearchParams] = useSearchParams();
  const searchBuffer = useFormInput(searchParams.get('q') || '');

  const page = searchParams.get('page');
  const q = searchParams.get('q');

  const { data, status } = useQuery(['search', q, page], () => search(q, page), {
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });

  /* -- Event Handlers -- */
  const handleNextPage = () => {
    const { pagination } = data;

    if (!pagination.hasNextPage) return;

    setSearchParams({
      page: pagination.page + 1,
      q: searchParams.get('q'),
    });
  };

  const handlePrevPage = () => {
    const { pagination } = data;

    if (!pagination.hasPrevPage) return;

    setSearchParams({
      page: pagination.page - 1,
      q: searchParams.get('q'),
    });
  };

  const handeSubmit = (e) => {
    e.preventDefault();

    setSearchParams({
      page: 1,
      q: searchBuffer.value,
    });
  };

  /* -- Rendering -- */
  const list = getList(status, data && data.results);

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

      {data && data.pagination && (
        <Pagination
          pagination={data.pagination}
          onNextClick={handleNextPage}
          onPrevClick={handlePrevPage}
        />
      )}
    </Box>
  );
}

export default Search;
