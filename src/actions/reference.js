import { store } from 'react-recollect';

function setReference(book, chapter) {
  store.reference = {
    book,
    chapter,
  };
}

export { setReference };
