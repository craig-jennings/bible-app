import { findBookByValue } from '../data/findBook';
import { navigate } from 'hookrouter';
import { setReference } from './reference';
import { store } from 'react-recollect';
import api from '../services/api';
import LoadState from '../utils/LoadState';

const INITIAL_STATE = {
  loadState: LoadState.NOT_LOADED,
  text: '',
};

store.passage = INITIAL_STATE;

function clearPassage() {
  store.passage = INITIAL_STATE;
}

function decrementPassage() {
  const { reference } = store;

  const book = findBookByValue(reference.book);
  const chapterNumber = parseInt(reference.chapter, 10);

  if (chapterNumber === 1) return;

  const newChapter = chapterNumber - 1;

  navigate(`/${book.value}/${newChapter}`);
}

async function fetchPassage(book, chapter) {
  setReference(book, chapter);

  store.passage = {
    loadState: LoadState.LOADING,
    text: '',
  };

  const passage = await api.fetchPassage(book, chapter);

  if (passage.length === 0) {
    store.passage = {
      loadState: LoadState.ERROR,
      text: '',
    };

    return;
  }

  store.passage = {
    loadState: LoadState.LOADED,
    text: passage,
  };
}

function incrementPassage() {
  const { reference } = store;

  const book = findBookByValue(reference.book);
  const chapterNumber = parseInt(reference.chapter, 10);

  if (chapterNumber === book.chapterCount) return;

  const newChapter = chapterNumber + 1;

  navigate(`/${book.value}/${newChapter}`);
}

export { clearPassage, decrementPassage, fetchPassage, incrementPassage };
