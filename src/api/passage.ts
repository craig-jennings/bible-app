import { findBookByValue } from '@data/findBook';
import { TOKEN } from './apiToken';

const BASE_URL = 'https://api.esv.org/v3/passage/html/?';

interface Payload {
  passages: string[];
}

function isValidReponse(json: any): json is Payload {
  return json?.passages && Array.isArray(json.passages);
}

async function fetchPassage(book: string, chapter: string) {
  let reference = `${book} ${chapter}`;

  const currentBook = findBookByValue(book);

  if (currentBook.chapterCount === 1) {
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

  const url = `${BASE_URL}${searchParams.toString()}`;

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Token ${TOKEN}` },
    });

    const json: unknown = await res.json();

    return isValidReponse(json) ? json.passages[0] : 'Something went wrong';
  } catch (err) {
    return 'Something went wrong';
  }
}

export { fetchPassage };
