import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SelectorList = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 115px;
  grid-template-columns: repeat(auto-fill, 115px);
  justify-content: center;
  width: 100%;
`;

const SelectorListItem = styled(Link)`
  align-items: center;
  border: 1px solid var(--selector__border-color);
  border-radius: 50%;
  color: inherit;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.1s ease-in-out;

  :hover,
  :focus {
    background-color: var(--selector__border-color);
    outline: none;
    text-decoration: none;
  }
`;

export { SelectorList, SelectorListItem };
