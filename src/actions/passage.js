import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { findBookByValue } from '../data/findBook';
import { navigate } from 'hookrouter';
import { setReference } from './reference';
import api from '../services/api';

const PassageActionType = {
  CLEAR_PASSAGE: 'passage/clear',
  FETCH_PASSAGE: 'passage/fetch',
};

/* -------------------- */
/* -- Simple Actions -- */
/* -------------------- */
const clearPassage = createAction(PassageActionType.CLEAR_PASSAGE);

/* ------------------- */
/* -- Thunk Actions -- */
/* ------------------- */
const decrementPassage = () => (dispatch, getState) => {
  const { reference } = getState();

  const book = findBookByValue(reference.book);
  const chapterNumber = parseInt(reference.chapter, 10);

  if (chapterNumber === 1) return;

  const newChapter = chapterNumber - 1;

  navigate(`/${book.value}/${newChapter}`);
};

const fetchPassage = createAsyncThunk(
  PassageActionType.FETCH_PASSAGE,
  async ({ book, chapter }, { dispatch }) => {
    dispatch(setReference(book, chapter));

    const passage = await api.fetchPassage(book, chapter);

    if (passage.length === 0) return Promise.reject();

    return passage;
  },
);

const incrementPassage = () => (dispatch, getState) => {
  const { reference } = getState();

  const book = findBookByValue(reference.book);
  const chapterNumber = parseInt(reference.chapter, 10);

  if (chapterNumber === book.chapterCount) return;

  const newChapter = chapterNumber + 1;

  navigate(`/${book.value}/${newChapter}`);
};

export { clearPassage, decrementPassage, fetchPassage, incrementPassage, PassageActionType };
