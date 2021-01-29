import { TOKEN } from './apiToken';

const SEARCH_URL = 'https://api.esv.org/v3/passage/search/?q=';

const PAGE_SIZE = 20;

interface Return {
  endRange: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  startRange: number;
  totalPages: number;
  totalResults: number;
}

async function search(
  term = '',
  currentPage = '1',
): Promise<{ pagination: Return | null; results: any[] | null }> {
  if (!term || term.trim().length === 0) {
    return {
      pagination: null,
      results: null,
    };
  }

  const url = `${SEARCH_URL}${term}&page=${currentPage}`;

  const res = await fetch(url, {
    headers: { Authorization: `Token ${TOKEN}` },
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
