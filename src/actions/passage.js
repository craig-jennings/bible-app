import { findBookByValue } from '../data/findBook.js';
import { setReference } from './reference.js';
import api from '../services/api.js';
import page from 'page';

const PassageActionType = {
  CLEAR_PASSAGE: 'passage:clear',
  SET_PASSAGE: 'passage:set',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const clearPassage = () => ({ type: PassageActionType.CLEAR_PASSAGE });
const setPassage = (text) => ({ text, type: PassageActionType.SET_PASSAGE });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const decrementPassage = () => async (dispatch, getState) => {
  const { reference } = getState();

  const book = findBookByValue(reference.book);
  const chapterNumber = parseInt(reference.chapter, 10);

  if (chapterNumber === 1) return;

  const newChapter = chapterNumber - 1;

  page(`/${book.value}/${newChapter}`);
};

const fetchPassage = (book, chapter) => async (dispatch, getState) => {
  const { reference } = getState();

  if (reference.book === book && reference.chapter === chapter) return;

  try {
    dispatch(clearPassage());

    const passage = await api.fetchPassage(book, chapter);

    dispatch(setReference(book, chapter));
    dispatch(setPassage(passage));
  } catch (e) {
    console.error(e);
  }
};

const incrementPassage = () => async (dispatch, getState) => {
  const { reference } = getState();

  const book = findBookByValue(reference.book);
  const chapterNumber = parseInt(reference.chapter, 10);

  if (chapterNumber === book.chapterCount) return;

  const newChapter = chapterNumber + 1;

  page(`/${book.value}/${newChapter}`);
};

export {
  clearPassage,
  decrementPassage,
  fetchPassage,
  incrementPassage,
  PassageActionType,
  setPassage,
};
