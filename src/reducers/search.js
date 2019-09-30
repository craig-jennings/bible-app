import { SearchActionType } from '../actions/search';
import createReducer from '../utils/createReducer';
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
  term: '',
};

const reducers = {
  [SearchActionType.CLEAR_RESULTS]: () => ({
    ...INITIAL_STATE,
    pagination: DEFAULT_PAGINATION,
  }),

  [SearchActionType.SET_RESULTS]: (state, { results }) => {
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
      ...state,
      loadState: LoadState.LOADED,
      pagination,
      results: searchResults,
    };
  },

  [SearchActionType.SET_RESULTS_LOADING]: (state) => ({
    ...state,
    loadState: LoadState.LOADING,
  }),

  [SearchActionType.SET_TERM]: (state, { term }) => ({
    ...state,
    term,
  }),
};

const searchReducer = createReducer(reducers, INITIAL_STATE);

export default searchReducer;
