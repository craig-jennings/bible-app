const _searchUrl = 'https://api.esv.org/v3/passage/search/?q=';
const _token = 'b960fb5d8eee535706d94159a4cce424b2414538';

const PAGE_SIZE = 20;

async function search(term = '', currentPage = 1) {
  if (!term || term.trim().length === 0) {
    return {
      pagination: null,
      results: null,
    };
  }

  const url = `${_searchUrl}${term}&page=${currentPage}`;

  const res = await fetch(url, {
    headers: { Authorization: `Token ${_token}` },
  });

  const { page, results, total_pages: totalPages, total_results: totalResults } = await res.json();

  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  const endRange = page * PAGE_SIZE;
  const startRange = (page - 1) * PAGE_SIZE + 1;

  const pagination = {
    endRange: endRange > totalResults ? totalResults : endRange,
    hasNextPage,
    hasPrevPage,
    page,
    startRange,
    totalPages,
    totalResults,
  };

  return { pagination, results };
}

export { search };
