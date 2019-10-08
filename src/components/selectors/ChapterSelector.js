import { Box, CenterBox } from '../base/Box';
import { findBookByValue } from '../../data/findBook';
import { FormInput } from '../base/Form';
import { SelectorList, SelectorListItem } from './SelectorList';
import { useFormInput } from '../../hooks';
import Page404 from '../errors/Page404';
import PropTypes from 'prop-types';

function buildChapterList(book, chapterCount, term) {
  let filteredChapters = [];

  for (let i = 1; i <= chapterCount; i++) {
    filteredChapters.push(`${i}`);
  }

  if (term.trim().length !== 0) {
    filteredChapters = filteredChapters.filter((c) => c.indexOf(term) > -1);
  }

  return filteredChapters.map((chapter) => (
    <SelectorListItem data-testid="selector-list-item" href={`${book}/${chapter}`} key={chapter}>
      {chapter}
    </SelectorListItem>
  ));
}

function ChapterSelector({ book }) {
  const searchInput = useFormInput('');

  const { chapterCount } = findBookByValue(book);

  const chapters = buildChapterList(book, chapterCount, searchInput.value);

  return chapterCount !== 0 ? (
    <Box p={3} data-testid="chapter-selector">
      <Box mb={3}>
        <FormInput
          autoFocus
          aria-label="Chapter Search Field"
          data-testid="chapter-selector-input"
          placeholder="Find Chapter..."
          type="number"
          {...searchInput}
        />
      </Box>

      {chapters.length > 0 ? (
        <SelectorList>{chapters}</SelectorList>
      ) : (
        <CenterBox>No results</CenterBox>
      )}
    </Box>
  ) : (
    <Page404 />
  );
}

ChapterSelector.propTypes = {
  book: PropTypes.string.isRequired,
};

export default ChapterSelector;
