import { createReducer } from '@reduxjs/toolkit';
import { ReferenceActionType } from '../actions/reference';

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {
  [ReferenceActionType.SET_REFERENCE]: (state, { payload: { book, chapter } }) => ({
    book,
    chapter,
  }),
});
