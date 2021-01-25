import { findBookByValue } from '../data/findBook';

const _baseUrl = 'https://api.esv.org/v3/passage/html/?';
const _token = 'b960fb5d8eee535706d94159a4cce424b2414538';

async function fetchPassage(book: string, chapter: string): Promise<string> {
  let reference = `${book} ${chapter}`;

  const _book = findBookByValue(book);

  if (_book.chapterCount === 1) {
    // Fetch the full chapter instead of just the first verse
    reference = `${book}`;
  }

  const searchParams = new URLSearchParams();
  searchParams.append('include-chapter-numbers', 'false');
  searchParams.append('include-footnotes', 'false');
  searchParams.append('include-headings', 'false');
  searchParams.append('include-passage-references', 'false');
  searchParams.append('include-short-copyright', 'false');
  searchParams.append('q', reference);

  const url = `${_baseUrl}${searchParams.toString()}`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Token ${_token}` },
    });

    const json = await res.json();

    return json.passages[0] || '';
  } catch (err) {
    return 'Something went wrong';
  }
}

export { fetchPassage };
