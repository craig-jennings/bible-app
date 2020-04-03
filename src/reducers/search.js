import { createReducer } from '@reduxjs/toolkit';
import { queryTerm, SearchActionType } from '../actions/search';
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

export default createReducer(INITIAL_STATE, {
  [SearchActionType.CLEAR_RESULTS]: () => ({
    ...INITIAL_STATE,
    pagination: { ...DEFAULT_PAGINATION },
  }),

  [queryTerm.fulfilled]: (state, { payload }) => {
    const { page, results, totalPages, totalResults } = payload;

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

    state.loadState = LoadState.LOADED;
    state.pagination = pagination;
    state.results = results;
  },

  [queryTerm.pending]: (state) => {
    state.loadState = LoadState.LOADING;
  },

  [queryTerm.rejected]: (state) => {
    state.results = [];
  },
});
