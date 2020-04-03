import { createReducer } from '@reduxjs/toolkit';
import { fetchPassage, PassageActionType } from '../actions/passage';
import LoadState from '../utils/LoadState';

const INITIAL_STATE = {
  loadState: LoadState.NOT_LOADED,
  text: '',
};

export default createReducer(INITIAL_STATE, {
  [PassageActionType.CLEAR_PASSAGE]: () => ({ ...INITIAL_STATE }),

  [fetchPassage.fulfilled]: (state, { payload: text }) => {
    state.loadState = LoadState.LOADED;
    state.text = text;
  },

  [fetchPassage.pending]: (state) => {
    state.loadState = LoadState.LOADING;
    state.text = '';
  },

  [fetchPassage.rejected]: (state) => {
    state.loadState = LoadState.ERROR;
    state.text = '';
  },
});
