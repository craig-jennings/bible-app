import { fetchPassage } from '$lib/api/passage';

export const load = ({ fetch, params }) => {
	const passagePromise =
		!params.bookId || !params.chapterId ? Promise.reject() : fetchPassage(params.bookId, params.chapterId, fetch);

	return { passagePromise };
};
