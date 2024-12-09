import type { BibleBook } from '$lib/types/BibleBook';
import { findBook } from '$lib/utils/findBook';

class History {
	entries = $state<Array<{ book: BibleBook; chapter: string }>>([]);

	addEntry(bookKey: string, chapter: string) {
		const existingEntry = this.entries.findIndex((entry) => entry.book.key === bookKey && entry.chapter === chapter);

		if (existingEntry !== -1) {
			this.entries.splice(existingEntry, 1);
		}

		const book = findBook(bookKey);

		this.entries.unshift({ book, chapter });

		if (this.entries.length > 10) {
			this.entries.pop();
		}
	}
}

export const historyStore = new History();
