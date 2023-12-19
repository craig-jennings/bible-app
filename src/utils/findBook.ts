import NewTestament from 'constants/NewTestament';
import OldTestament from 'constants/OldTestament';
import type { BibleBook } from 'types/BibleBook';

const UNKNOWN_BOOK: BibleBook = {
	chapterCount: 0,
	key: 'unknown',
	label: 'Unknown',
};

function findBook(labelOrKey: string): BibleBook {
	let bookToFind = labelOrKey;

	// ISSUE: Search results return the reference as 'Psalm' instead of 'Psalms' thus causing the
	// lookup to fail
	if (labelOrKey === 'Psalm') {
		bookToFind = `${labelOrKey}s`;
	}

	return (
		NewTestament.find((b) => b.label === bookToFind || b.key === bookToFind) ||
		OldTestament.find((b) => b.label === bookToFind || b.key === bookToFind) || { ...UNKNOWN_BOOK }
	);
}

export default findBook;
