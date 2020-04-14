import { CenterBox, FlexBox } from '../base/Box';
import { collect, PropTypes } from 'react-recollect';
import { SearchIcon } from '../base/Icons';
import { UnstyledLink } from '../base/Unstyled';
import styled from 'styled-components';

const HeaderContainer = styled(FlexBox)`
  background-color: var(--header__bg-color);
  color: var(--font-color);
  width: 100%;

  @media screen and (max-width: 767px) {
    ${UnstyledLink} {
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const Separator = styled.span`
  margin: 0 0.5rem;
`;

const SearchLink = styled(UnstyledLink)`
  display: flex;
`;

function Header({ store: { header } }) {
  const bookEl = header.value && (
    <>
      <Separator>&gt;</Separator>{' '}
      <UnstyledLink data-testid="book" to={`/${header.value}`}>
        {header.label}
      </UnstyledLink>
    </>
  );

  const chapterEl = header.chapter && (
    <>
      <Separator>&gt;</Separator> <span data-testid="chapter">{header.chapter}</span>
    </>
  );

  return (
    <HeaderContainer data-testid="header" justifyContent="space-between" px={3}>
      <h1>
        <CenterBox>
          <UnstyledLink to="/">Bible</UnstyledLink> {bookEl} {chapterEl}
        </CenterBox>
      </h1>

      <CenterBox>
        <SearchLink aria-label="Search" to="/search">
          <SearchIcon />
        </SearchLink>
      </CenterBox>
    </HeaderContainer>
  );
}

Header.propTypes = {
  store: PropTypes.shape({
    header: PropTypes.shape({
      chapter: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default collect(Header);
