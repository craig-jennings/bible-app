import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnstyledButton = styled.button`
  background-color: inherit;
  border: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  padding: 0;
`;

const UnstyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :focus,
  :hover,
  :visited {
    text-decoration: none;
  }
`;

export { UnstyledButton, UnstyledLink };
