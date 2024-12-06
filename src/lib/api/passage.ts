import { config } from '$lib/utils/config';
import { findBook } from '$lib/utils/findBook';

interface Payload {
	passages: string[];
}

export async function fetchPassage(book: string, chapter: string, fetch = globalThis.fetch) {
	let reference = `${book} ${chapter}`;

	const currentBook = findBook(book);

	if (currentBook.chapterCount === 1) {
		// Fetch the full chapter instead of just the first verse
		reference = `${book}`;
	}

	const searchParams = new URLSearchParams([
		['include-chapter-numbers', 'false'],
		['include-footnotes', 'false'],
		['include-headings', 'false'],
		['include-passage-references', 'false'],
		['include-short-copyright', 'false'],
		['q', reference],
	]);

	const url = `${config.apiBaseUrl}?${searchParams.toString()}`;

	try {
		const res = await fetch(url, {
			headers: {
				Authorization: `Token ${config.apiToken}`,
			},
		});

		const json: unknown = await res.json();

		return isValidReponse(json) ? json.passages[0] : 'Something went wrong';
	} catch {
		return 'Something went wrong';
	}
}

function isValidReponse(json: unknown): json is Payload {
	return !!json && Array.isArray((json as Payload).passages);
}
