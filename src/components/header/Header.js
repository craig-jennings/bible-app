import { CenterBox, FlexBox } from '../base/Box';
import { clearResults } from '../../actions/search';
import { SearchIcon } from '../base/Icons';
import { UnstyledLink } from '../base/Unstyled';
import { useDispatch, useSelector } from 'react-redux';
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

  const bookEl = header.value && (
    <>
      <Separator>&gt;</Separator>{' '}
      <UnstyledLink to={`/${header.value}`}>{header.label}</UnstyledLink>
    </>
  );

  const chapterEl = header.chapter && (
    <>
      <Separator>&gt;</Separator> <span>{header.chapter}</span>
    </>
  );

  const handleSearchClick = () => {
    dispatch(clearResults());
  };

  return (
    <HeaderContainer justifyContent="space-between" px={3}>
      <h1>
        <CenterBox>
          <UnstyledLink to="/">Bible</UnstyledLink> {bookEl} {chapterEl}
        </CenterBox>
      </h1>

      <CenterBox>
        <SearchLink aria-label="Search" to="/search" onClick={handleSearchClick}>
          <SearchIcon />
        </SearchLink>
      </CenterBox>
    </HeaderContainer>
  );
}

export default Header;
