import { CenterBox, FlexBox } from '../base/Box';
import { clearResults } from '../../actions/search';
import { SearchIcon } from '../base/Icons';
import { UnstyledLink } from '../base/Unstyled';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParams } from 'hookrouter';
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

function Header() {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);
  const [, setQueryParams] = useQueryParams();

  const bookEl = header.value && (
    <>
      <Separator>&gt;</Separator>{' '}
      <UnstyledLink data-testid="book" href={`/${header.value}`}>
        {header.label}
      </UnstyledLink>
    </>
  );

  const chapterEl = header.chapter && (
    <>
      <Separator>&gt;</Separator> <span data-testid="chapter">{header.chapter}</span>
    </>
  );

  const handleSearchClick = () => {
    dispatch(clearResults());

    // HACK: This is a workaround for https://github.com/Paratron/hookrouter/issues/62
    setQueryParams({}, true);
  };

  return (
    <HeaderContainer data-testid="header" justifyContent="space-between" px={3}>
      <h1>
        <CenterBox>
          <UnstyledLink href="/">Bible</UnstyledLink> {bookEl} {chapterEl}
        </CenterBox>
      </h1>

      <CenterBox>
        <SearchLink aria-label="Search" href="/search" onClick={handleSearchClick}>
          <SearchIcon />
        </SearchLink>
      </CenterBox>
    </HeaderContainer>
  );
}

export default Header;
