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
    <SelectorListItem key={chapter} to={`${book}/${chapter}`}>
      {chapter}
    </SelectorListItem>
  ));
}

function ChapterSelector({ book }) {
  const searchInput = useFormInput('');

  const { chapterCount } = findBookByValue(book);

  const chapters = buildChapterList(book, chapterCount, searchInput.value);

  return chapterCount !== 0 ? (
    <Box p={3}>
      <Box mb={3}>
        <FormInput
          autoFocus
          aria-label="Chapter Search Field"
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
