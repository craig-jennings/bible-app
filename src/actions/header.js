import { findBookByValue } from '../data/findBook';
import { store } from 'react-recollect';

store.header = {};

function resetHeader() {
  store.header = {};
}

function setHeader(bookValue, chapter) {
  const book = findBookByValue(bookValue);

  store.header.chapter = chapter;
  store.header.label = book.label;
  store.header.value = book.value;
}

export { resetHeader, setHeader };
