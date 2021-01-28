import { Box, CenterBox } from '@common/Box';
import { findBookByValue } from '@data/findBook';
import { FormInput } from '@common/Form';
import { SelectorList, SelectorListItem } from './SelectorList';
import Page404 from '@components/errors/Page404';
import useFormInput from '@hooks/useFormInput';

function buildChapterList(chapterCount: number, term: string) {
  let filteredChapters = [];

  for (let i = 1; i <= chapterCount; i++) {
    filteredChapters.push(`${i}`);
  }

  if (term.trim().length !== 0) {
    filteredChapters = filteredChapters.filter((c) => c.indexOf(term) > -1);
  }

  return filteredChapters.map((chapter) => (
    <SelectorListItem data-testid="selector-list-item" key={chapter} to={chapter}>
      {chapter}
    </SelectorListItem>
  ));
}

interface ChapterSelectorProps {
  book: string;
}

function ChapterSelector({ book }: ChapterSelectorProps) {
  const searchInput = useFormInput('');

  const { chapterCount } = findBookByValue(book);

  const chapters = buildChapterList(chapterCount, searchInput.value);

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

export default ChapterSelector;
