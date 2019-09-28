import { UnstyledButton } from './Unstyled';
import styled from 'styled-components';

const IconButton = styled(UnstyledButton)`
  align-items: center;
  background-color: inherit;
  display: flex;
  height: ${({ height }) => height || '24px'};
  justify-content: center;
  position: relative;
  transition-duration: 0.15s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: ${({ width }) => width || '24px'};

  ::before {
    background-color: var(--notification__button__bg-color--hover);
    border-radius: 50%;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(0);
    transition-duration: 0.15s;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  :focus,
  :hover {
    ::before {
      opacity: 0.35;
      transform: scale(1.5);
    }
  }
`;

export { IconButton };
