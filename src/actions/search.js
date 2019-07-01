import api from '../services/api.js';
import LoadState from '../utils/LoadState.js';

const SearchActionType = {
  ClearResults: 'search:clear_results',
  SetResults: 'search:set_results',
  SetResultsLoading: 'search:loading_results',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const clearResults = () => ({ type: SearchActionType.ClearResults });

const setResults = (results, term) => ({
  results,
  term,
  type: SearchActionType.SetResults,
});

const setResultsLoading = () => ({ type: SearchActionType.SetResultsLoading });

/* ---------------------- */
/* -- Helper Functions -- */
/* ---------------------- */
const executeSearch = async (dispatch, term, page) => {
  dispatch(setResultsLoading());

  try {
    const results = await api.search(term, page);

    dispatch(setResults(results, term));
  } catch (e) {
    console.error(e);
  }
};

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const nextPage = () => async (dispatch, getState) => {
  const { search } = getState();

  if (search.loadState !== LoadState.LOADED) return;

  if (search.pagination.page === search.pagination.totalPages) return;

  executeSearch(dispatch, search.term, search.pagination.page + 1);
};

const prevPage = () => async (dispatch, getState) => {
  const { search } = getState();

  if (search.loadState !== LoadState.LOADED) return;

  if (search.pagination.page === 1) return;

  executeSearch(dispatch, search.term, search.pagination.page - 1);
};

const queryTerm = term => async (dispatch) => {
  dispatch(clearResults());

  if (term.length === 0) return;

  executeSearch(dispatch, term);
};

export {
  clearResults,
  nextPage,
  prevPage,
  queryTerm,
  SearchActionType,
  setResults,
};
