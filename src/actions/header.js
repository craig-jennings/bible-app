import { findBookByValue } from '../data/findBook.js';

const HeaderActionType = {
  RESET_HEADER: 'header:reset',
  SET_HEADER: 'header:set',
};

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const resetHeader = () => ({ type: HeaderActionType.RESET_HEADER });

const setHeader = (book, chapter) => ({
  book: findBookByValue(book),
  chapter,
  type: HeaderActionType.SET_HEADER,
});

export {
  HeaderActionType,
  resetHeader,
  setHeader,
};
