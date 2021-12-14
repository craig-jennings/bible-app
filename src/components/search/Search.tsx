import 'wc-spinners/dist/orbit-spinner';
import { Box, CenterBox, InlineBox } from '@common/Box';
import { Form, FormButton, FormInput } from '@common/Form';
import { FormEvent } from 'react';
import { search } from '@api/search';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import Pagination from '@components/pagination/Pagination';
import SearchItem from './SearchItem';
import useFormInput from '@hooks/useFormInput';

function getResultList(results: any[] | null) {
  if (!results) return null;

  if (results.length === 0) {
    return <CenterBox data-testid="no-results">No results</CenterBox>;
  }

  return results.map((r) => <SearchItem item={r} key={r.reference} />);
}

function Search() {
  /* -- Hooks -- */
  const [searchParams, setSearchParams] = useSearchParams();
  const searchBuffer = useFormInput<string>(searchParams.get('q') || '');

  const page = searchParams.get('page') || '';
  const q = searchParams.get('q') || '';

  const { data, status } = useQuery(['search', q, page], () => search(q, page));

  /* -- Event Handlers -- */
  const handleNextPage = () => {
    if (!data!.pagination!.hasNextPage) return;

    setSearchParams({
      page: `${data!.pagination!.page + 1}`,
      q: searchParams.get('q') || '',
    });
  };

  const handlePrevPage = () => {
    if (!data!.pagination!.hasPrevPage) return;

    setSearchParams({
      page: `${data!.pagination!.page - 1}`,
      q: searchParams.get('q') || '',
    });
  };

  const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchParams({
      page: '1',
      q: searchBuffer.value,
    });
  };

  /* -- Rendering -- */
  let resultList;

  switch (status) {
    case 'loading':
      resultList = (
        <CenterBox>
          <orbit-spinner color="white" />
        </CenterBox>
      );

      break;

    case 'error':
      resultList = <div>Error!</div>;

      break;

    default:
      resultList = getResultList(data!.results);
  }

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

      <div>{resultList}</div>

      {data?.pagination && (
        <Pagination pagination={data.pagination} onNextClick={handleNextPage} onPrevClick={handlePrevPage} />
      )}
    </Box>
  );
}

export default Search;
