import { findBookByValue } from '../data/findBook.js';

class Api {
  constructor() {
    this._baseUrl = 'https://api.esv.org/v3/passage/html/?';
    this._searchUrl = 'https://api.esv.org/v3/passage/search/?q=';
    this._token = 'b960fb5d8eee535706d94159a4cce424b2414538';
  }

  async fetchPassage(book, chapter) {
    let reference = `${book} ${chapter}`;

    const _book = findBookByValue(book);

    if (_book.chapterCount === 1) {
      // Fetch the full chapter instead of just the first verse
      reference = `${book}`;
    }

    const searchParams = this._constructPassageParams(reference);

    const url = `${this._baseUrl}${searchParams.toString()}`;

    try {
      const json = await this._get(url);

      return json.passages[0] || '';
    } catch (err) {
      return 'Something went wrong';
    }
  }

  async search(term, page = 1) {
    const url = `${this._searchUrl}${term}&page=${page}`;

    try {
      const res = await this._get(url);

      return {
        page: res.page,
        results: res.results,
        totalPages: res.total_pages,
        totalResults: res.total_results,
      };
    } catch (err) {
      return 'Something went wrong';
    }
  }

  _constructPassageParams(q) {
    const searchParams = new URLSearchParams();
    searchParams.append('include-chapter-numbers', false);
    searchParams.append('include-footnotes', false);
    searchParams.append('include-headings', false);
    searchParams.append('include-passage-references', false);
    searchParams.append('include-short-copyright', false);

    searchParams.append('q', q);

    return searchParams;
  }

  _getHeaders() {
    return {
      Authorization: `Token ${this._token}`,
    };
  }

  async _get(url) {
    const res = await fetch(url, {
      headers: this._getHeaders(),
    });

    return res.json();
  }
}

export default new Api();
