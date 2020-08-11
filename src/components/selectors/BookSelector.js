import { Box } from '../base/Box';
import { FormInput } from '../base/Form';
import { SelectorList, SelectorListItem } from './SelectorList';
import NewTestament from '../../data/NewTestament';
import OldTestament from '../../data/OldTestament';
import styled from 'styled-components';
import useFormInput from '../../hooks/useFormInput';

const Header = styled.h1`
  text-align: center;
`;

function buildBookList(books, term) {
  let filteredBooks = books;

  if (term.trim().length !== 0) {
    filteredBooks = books.filter((b) => b.label.toLowerCase().indexOf(term) > -1);
  }

  return filteredBooks.map(({ label, value }) => (
    <SelectorListItem data-testid="selector-list-item" key={value} to={value}>
      {label}
    </SelectorListItem>
  ));
}

function BookSelector() {
  const searchInput = useFormInput('');

  const newTestamentBooks = buildBookList(NewTestament, searchInput.value.toLowerCase());
  const oldTestamentBooks = buildBookList(OldTestament, searchInput.value.toLowerCase());

  return (
    <Box p={3} data-testid="book-selector">
      <div>
        <FormInput
          aria-label="Book Search Field"
          autoFocus
          data-testid="book-selector-input"
          placeholder="Find Book..."
          {...searchInput}
        />
      </div>

      <Box my={2}>
        <Header>Old Testament</Header>
      </Box>

      <SelectorList>{oldTestamentBooks}</SelectorList>

      <Box my={2}>
        <Header>New Testament</Header>
      </Box>

      <SelectorList>{newTestamentBooks}</SelectorList>
    </Box>
  );
}

export default BookSelector;
