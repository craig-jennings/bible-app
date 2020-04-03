import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

const SearchActionType = {
  CLEAR_RESULTS: 'search/clearResults',
  QUERY_TERM: 'search/queryTerm',
};

/* -------------------- */
/* -- Simple Actions -- */
/* -------------------- */
const clearResults = createAction(SearchActionType.CLEAR_RESULTS);

/* ------------------- */
/* -- Thunk Actions -- */
/* ------------------- */
const queryTerm = createAsyncThunk(SearchActionType.QUERY_TERM, async ({ term, page = 1 }) => {
  if (term.trim().length === 0) return [];

  const results = await api.search(term, page);

  return results;
});

export { clearResults, queryTerm, SearchActionType };
