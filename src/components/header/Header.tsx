import { CenterBox, FlexBox } from '@common/Box';
import { SearchIcon } from '@common/Icons';
import { UnstyledLink } from '@common/Unstyled';
import { useHeaderState } from '@stores/headerStore';
import styled, { css } from 'styled-components';

const HeaderContainer = styled(FlexBox)<{ isSticky?: boolean }>`
  background-color: var(--header__bg-color);
  color: var(--font-color);
  width: 100%;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: sticky;
      top: 0;
    `};

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

function Header() {
  /* -- Hooks -- */
  const header = useHeaderState();

  /* -- Rendering -- */
  const bookEl = header.bookValue && (
    <>
      <Separator>&gt;</Separator>{' '}
      <UnstyledLink data-testid="book" to={`/${header.bookValue}`}>
        {header.bookLabel}
      </UnstyledLink>
    </>
  );

  const chapterEl = header.chapter && (
    <>
      <Separator>&gt;</Separator> <span data-testid="chapter">{header.chapter}</span>
    </>
  );

  return (
    <HeaderContainer
      data-testid="header"
      isSticky={header.isSticky}
      justifyContent="space-between"
      px={3}
    >
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

export default Header;
