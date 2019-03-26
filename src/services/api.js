import findBook from '../data/findBook.js';

class Api {
  constructor() {
    this._baseUrl = 'https://api.esv.org/v3/passage/html/?';
    this._token = 'b960fb5d8eee535706d94159a4cce424b2414538';
  }

  async fetchPassage(book, chapter) {
    let reference = `${book} ${chapter}`;

    const _book = findBook(book);

    if (_book.chapterCount === 1) {
      // Fetch the full chapter instead of just the first verse
      reference = `${book}`;
    }

    const searchParams = this._constructSearchParams(reference);

    const url = `${this._baseUrl}${searchParams.toString()}`;

    try {
      const res = await fetch(url, {
        headers: this._getHeaders(),
      });

      const json = await res.json();

      return json.passages[0] || null;
    } catch (err) {
      return 'Something went wrong';
    }
  }

  _constructSearchParams(q) {
    const searchParams = new URLSearchParams();
    searchParams.append('include-chapter-numbers', false);
    searchParams.append('include-footnotes', false);
    searchParams.append('include-headings', false);
    searchParams.append('include-passage-references', false);
    searchParams.append('include-short-copyright', false);
    searchParams.append('wrapping-div', true);

    searchParams.append('q', q);

    return searchParams;
  }

  _getHeaders() {
    return {
      Authorization: `Token ${this._token}`,
    };
  }
}

export default new Api();
