import { createReducer } from '@reduxjs/toolkit';
import { HeaderActionType } from '../actions/header';

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {
  [HeaderActionType.RESET]: () => ({}),

  [HeaderActionType.SET]: (draft, { payload }) => {
    const { book, chapter } = payload;

    draft.chapter = chapter;
    draft.label = book.label;
    draft.value = book.value;
  },
});
