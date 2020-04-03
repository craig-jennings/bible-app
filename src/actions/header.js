import { createAction } from '@reduxjs/toolkit';
import { findBookByValue } from '../data/findBook';

const HeaderActionType = {
  RESET_HEADER: 'header/reset',
  SET_HEADER: 'header/set',
};

/* -------------------- */
/* -- Simple Actions -- */
/* -------------------- */
const resetHeader = createAction(HeaderActionType.RESET_HEADER);

const setHeader = createAction(HeaderActionType.SET_HEADER, (book, chapter) => ({
  payload: {
    book: findBookByValue(book),
    chapter,
  },
}));

export { HeaderActionType, resetHeader, setHeader };
