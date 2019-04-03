import NewTestament from './NewTestament.js';
import OldTestament from './OldTestament.js';

const UNKNOWN_BOOK = {
  chapterCount: 0,
  label: 'Unknown',
  value: 'unknown',
};

const findBookByLabel = label => NewTestament.find(b => b.label === label)
                                 || OldTestament.find(b => b.label === label)
                                 || Object.assign({}, UNKNOWN_BOOK);

const findBookByValue = key => NewTestament.find(b => b.value === key)
                               || OldTestament.find(b => b.value === key)
                               || Object.assign({}, UNKNOWN_BOOK);

export {
  findBookByLabel,
  findBookByValue,
};
