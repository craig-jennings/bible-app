import NewTestament from './NewTestament.js';
import OldTestament from './OldTestament.js';

const UNKNOWN_BOOK = {
  chapterCount: 0,
  label: 'Unknown',
  value: 'unknown',
};

const findBookByLabel = (label) => {
  let labelToFind = label;

  // ISSUE: Search results return the reference as 'Psalm' instead of 'Psalms' thus causing the
  // lookup to fail
  if (label === 'Psalm') {
    labelToFind = `${label}s`;
  }

  return NewTestament.find(b => b.label === labelToFind)
         || OldTestament.find(b => b.label === labelToFind)
         || Object.assign({}, UNKNOWN_BOOK);
};

const findBookByValue = key => NewTestament.find(b => b.value === key)
                               || OldTestament.find(b => b.value === key)
                               || Object.assign({}, UNKNOWN_BOOK);

export {
  findBookByLabel,
  findBookByValue,
};
