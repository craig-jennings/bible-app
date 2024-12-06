import { search } from '$lib/api/search.js';

export const load = async ({ fetch, url }) => {
	const page = url.searchParams.get('page') || '1';
	const q = url.searchParams.get('q') || '';

	const searchPromise = search(q, page, fetch);

	return { searchPromise };
};
