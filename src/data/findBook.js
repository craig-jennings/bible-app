import NewTestament from './NewTestament.js';
import OldTestament from './OldTestament.js';

const findBookByLabel = label => NewTestament.find(b => b.label === label)
                                 || OldTestament.find(b => b.label === label)
                                 || {};

const findBookByValue = key => NewTestament.find(b => b.value === key)
                        || OldTestament.find(b => b.value === key)
                        || {};

export {
  findBookByLabel,
  findBookByValue,
};
