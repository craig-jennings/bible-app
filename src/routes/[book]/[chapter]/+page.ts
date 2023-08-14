import { fetchPassage } from '$lib/api/passage';

export async function load({ params }) {
	const passage = await fetchPassage(params.book, params.chapter);

	return {
		book: params.book,
		chapter: params.chapter,
		passage,
	};
}
