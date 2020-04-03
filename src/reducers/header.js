import { createReducer } from '@reduxjs/toolkit';
import { HeaderActionType } from '../actions/header';

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {
  [HeaderActionType.RESET_HEADER]: () => ({ ...INITIAL_STATE }),

  [HeaderActionType.SET_HEADER]: (state, { payload: { book, chapter } }) => {
    state.label = book.label;
    state.value = book.value;
    state.chapter = chapter;
  },
});
