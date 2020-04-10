import { store } from 'react-recollect';
import api from '../services/api';
import LoadState from '../utils/LoadState';

const PAGE_SIZE = 20;

const DEFAULT_PAGINATION = {
  endRange: 0,
  hasNextPage: false,
  hasPrevPage: false,
  page: 1,
  startRange: 0,
  totalPages: 1,
  totalResults: 0,
};

const INITIAL_STATE = {
  loadState: LoadState.NOT_LOADED,
  pagination: DEFAULT_PAGINATION,
  results: [],
};

store.search = INITIAL_STATE;

function clearResults() {
  store.search = INITIAL_STATE;
}

async function queryTerm(term, page = 1) {
  if (term.trim().length === 0) {
    store.search.pagination = DEFAULT_PAGINATION;
    store.search.results = [];

    return;
  }

  store.search.loadState = LoadState.LOADING;

  try {
    const { results, totalPages, totalResults } = await api.search(term, page);

    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    const endRange = page * PAGE_SIZE;
    const startRange = (page - 1) * PAGE_SIZE + 1;

    const pagination = {
      endRange: endRange > totalResults ? totalResults : endRange,
      hasNextPage,
      hasPrevPage,
      page,
      startRange,
      totalPages,
      totalResults,
    };

    store.search.loadState = LoadState.LOADED;
    store.search.pagination = pagination;
    store.search.results = results;
  } catch (err) {
    store.search.loadState = LoadState.ERROR;
    store.search.results = [];
  }
}

export { clearResults, queryTerm };
