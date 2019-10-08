import { A } from 'hookrouter';
import { Box } from '../base/Box';
import { findBookByLabel } from '../../data/findBook';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchItemContainer = styled(Box)`
  border-radius: 0.5rem;
  border: 1px solid var(--selector__border-color);
  padding: 0.25rem 0.5rem;
`;

const ReferenceLink = styled(A)`
  color: inherit;
  display: block;
  font-style: italic;
  text-decoration: none;
`;

const Underline = styled.div`
  text-decoration: underline;
`;

function SearchItem({ item }) {
  const { content, reference } = item;

  const book = reference.slice(0, reference.lastIndexOf(' '));

  const chapter = reference.slice(reference.lastIndexOf(' ') + 1, reference.indexOf(':'));

  const { value: bookValue } = findBookByLabel(book);

  const referenceLink = `/${bookValue}/${chapter}`;

  return (
    <SearchItemContainer data-testid="search-item" mb={3}>
      <ReferenceLink href={referenceLink}>
        <div>{content}</div>
        <Underline data-testid="reference">{reference}</Underline>
      </ReferenceLink>
    </SearchItemContainer>
  );
}

SearchItem.propTypes = {
  item: PropTypes.shape({
    content: PropTypes.string,
    reference: PropTypes.string,
  }).isRequired,
};

export default SearchItem;
