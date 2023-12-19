import type { BibleBook } from 'types/BibleBook';

function searchBooks(books: Array<BibleBook>, term: string) {
	let filteredBooks = books;

	if (term.trim().length !== 0) {
		filteredBooks = books.filter((b) => b.label.toLowerCase().indexOf(term) > -1);
	}

	return filteredBooks;
}

export default searchBooks;
