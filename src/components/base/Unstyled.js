import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnstyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :focus,
  :hover,
  :visited {
    text-decoration: none;
  }
`;

export { UnstyledLink };
