import { search } from '$lib/api/search';

export async function load({ url }) {
	const page = url.searchParams.get('page') || '';
	const q = url.searchParams.get('q') || '';

	const res = await search(q, page);

	return res;
}
