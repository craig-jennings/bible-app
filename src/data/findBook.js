import NewTestament from './NewTestament.js';
import OldTestament from './OldTestament.js';

const UKNOWN_BOOK = {
  chapterCount: 0,
  label: 'Unknown',
  value: 'unknown',
};

const findBookByLabel = label => NewTestament.find(b => b.label === label)
                                 || OldTestament.find(b => b.label === label)
                                 || { ...UKNOWN_BOOK };

const findBookByValue = key => NewTestament.find(b => b.value === key)
                        || OldTestament.find(b => b.value === key)
                        || { ...UKNOWN_BOOK };

export {
  findBookByLabel,
  findBookByValue,
};
