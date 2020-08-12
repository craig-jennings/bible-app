import { createAction } from '@reduxjs/toolkit';
import { findBookByValue } from '../data/findBook';

const HeaderActionType = {
  RESET: 'header/reset',
  SET: 'header/set',
};

const resetHeader = createAction(HeaderActionType.RESET);

const setHeader = createAction(HeaderActionType.SET, (book, chapter) => {
  const bookValue = findBookByValue(book);

  return {
    payload: {
      book: bookValue,
      chapter,
    },
  };
});

export { HeaderActionType, resetHeader, setHeader };
