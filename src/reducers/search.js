import { SearchActionType } from '../actions/search.js';
import createReducer from '../utils/createReducer.js';
import LoadState from '../utils/LoadState.js';

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
  term: '',
};

const reducers = {
  [SearchActionType.ClearResults]: () => ({
    ...INITIAL_STATE,
    pagination: DEFAULT_PAGINATION,
  }),

  [SearchActionType.SetResults]: (state, { results, term }) => {
    const { page, results: searchResults, totalPages, totalResults } = results;

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

    return {
      loadState: LoadState.LOADED,
      pagination,
      results: searchResults,
      term,
    };
  },

  [SearchActionType.SetResultsLoading]: (state) => ({
    ...state,
    loadState: LoadState.LOADING,
  }),
};

const searchReducer = createReducer(reducers, INITIAL_STATE);

export default searchReducer;
