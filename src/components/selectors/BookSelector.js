import { FormInput } from '../base/Form';
import { SelectorList, SelectorListItem } from './SelectorList';
import { useFormInput } from '../../hooks';
import NewTestament from '../../data/NewTestament';
import OldTestament from '../../data/OldTestament';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

const Header = styled.h1`
  margin: 0.5rem 0;
  text-align: center;
`;

function buildBookList(books, term) {
  let filteredBooks = books;

  if (term.trim().length !== 0) {
    filteredBooks = books.filter((b) => b.label.toLowerCase().indexOf(term) > -1);
  }

  return filteredBooks.map(({ label, value }) => (
    <SelectorListItem key={value} to={value}>
      {label}
    </SelectorListItem>
  ));
}

function BookSelector() {
  const searchInput = useFormInput('');

  const newTestamentBooks = buildBookList(NewTestament, searchInput.value.toLowerCase());
  const oldTestamentBooks = buildBookList(OldTestament, searchInput.value.toLowerCase());

  return (
    <Container>
      <div>
        <FormInput
          aria-label="Book Search Field"
          autoFocus
          placeholder="Find Book..."
          {...searchInput}
        />
      </div>

      <Header>Old Testament</Header>
      <SelectorList>{oldTestamentBooks}</SelectorList>
      <Header>New Testament</Header>
      <SelectorList>{newTestamentBooks}</SelectorList>
    </Container>
  );
}

export default BookSelector;
