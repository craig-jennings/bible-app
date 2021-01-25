import NewTestament from './NewTestament';
import OldTestament from './OldTestament';

const UNKNOWN_BOOK = {
  chapterCount: 0,
  label: 'Unknown',
  value: 'unknown',
};

const findBookByLabel = (label: string) => {
  let labelToFind = label;

  // ISSUE: Search results return the reference as 'Psalm' instead of 'Psalms' thus causing the
  // lookup to fail
  if (label === 'Psalm') {
    labelToFind = `${label}s`;
  }

  return (
    NewTestament.find((b) => b.label === labelToFind) ||
    OldTestament.find((b) => b.label === labelToFind) || { ...UNKNOWN_BOOK }
  );
};

const findBookByValue = (key: string) =>
  NewTestament.find((b) => b.value === key) ||
  OldTestament.find((b) => b.value === key) || { ...UNKNOWN_BOOK };

export { findBookByLabel, findBookByValue };
