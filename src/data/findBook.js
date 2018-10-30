import NewTestament from './NewTestament.js';
import OldTestament from './OldTestament.js';

const findBook = key => NewTestament.find(b => b.value === key)
                        || OldTestament.find(b => b.value === key)
                        || {};

export default findBook;
