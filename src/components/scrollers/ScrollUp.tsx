import { CenterBox } from '../base/Box';
import { UpCaret } from '../base/Icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled(CenterBox)<{ isHidden?: boolean }>`
  background-color: var(--ba-scrollup__bg-color, #455a64);
  border-radius: 50%;
  bottom: 1.5rem;
  cursor: pointer;
  height: 3rem;
  opacity: 0.9;
  position: fixed;
  right: 1.5rem;
  transform: ${({ isHidden }) => isHidden && 'translateY(6rem)'};
  transition: transform 0.15s ease-in-out;
  width: 3rem;
`;

function ScrollUp() {
  const [isHidden, setIsHidden] = useState(true);

  /* -- Hooks -- */
  useEffect(() => {
    const callback = () => {
      if (window.scrollY !== 0) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    document.addEventListener('scroll', callback);

    return () => document.removeEventListener('scroll', callback);
  }, []);

  /* -- Event Handlers -- */
  const handleClick = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <Container data-testid="scroll-up" isHidden={isHidden} onClick={handleClick}>
      <UpCaret />
    </Container>
  );
}

export default ScrollUp;
