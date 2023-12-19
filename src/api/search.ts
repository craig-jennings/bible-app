const PAGE_SIZE = 20;
const SEARCH_URL = 'https://api.esv.org/v3/passage/search/?q=';

interface SearchResult {
	content: string;
	reference: string;
}

interface SearchResponse {
	page: number;
	results: SearchResult[];
	total_pages: number;
	total_results: number;
}

interface Pagination {
	endRange: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
	page: number;
	startRange: number;
	totalPages: number;
	totalResults: number;
}

async function search(term = '', currentPage = '1') {
	if (!term || term.trim().length === 0) {
		return {
			pagination: null,
			results: null,
		};
	}

	const url = `${SEARCH_URL}${term}&page=${currentPage}`;

	const res = await fetch(url, {
		headers: { Authorization: `Token ${import.meta.env.PUBLIC_API_TOKEN}` },
	});

	const { page, results, total_pages: totalPages, total_results: totalResults }: SearchResponse = await res.json();

	const hasNextPage = page < totalPages;
	const hasPrevPage = page > 1;

	const endRange = page * PAGE_SIZE;
	const startRange = (page - 1) * PAGE_SIZE + 1;

	const pagination: Pagination = {
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
export type { Pagination, SearchResult };
