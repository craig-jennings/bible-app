import api from '../services/api';

const PAGE_SIZE = 20;

async function queryTerm(key, term = '', currentPage = 1) {
  if (!term || term.trim().length === 0) {
    return {
      pagination: null,
      results: null,
    };
  }

  const { page, results, totalPages, totalResults } = await api.search(term, currentPage);

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

export { queryTerm };
