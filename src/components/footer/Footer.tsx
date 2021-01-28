import { CenterBox } from '@common/Box';
import styled from 'styled-components';

const Text = styled.small`
  font-style: italic;
`;

const Container = styled(CenterBox)`
  background-color: var(--footer__bg-color);
  height: 100%;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

function Footer() {
  return (
    <Container>
      <Text>All passages sourced from the ESV translation</Text>
    </Container>
  );
}

export default Footer;
