import NotificationContainer from './NotificationContainer';
import styled, { css } from 'styled-components';

const Container = styled(NotificationContainer)`
  width: 100%;

  ${({ variant }) => {
    switch (variant) {
      case 'error':
        return css`
          background-color: var(--danger);
          color: var(--danger-text);
        `;

      case 'success':
        return css`
          background-color: var(--primary);
          color: var(--primary-text);
        `;

      default:
        return css`
          background-color: var(--neutral);
          color: var(--neutral-text);
        `;
    }
  }}
`;

const StandardNotification = ({ children, variant }) => {
  /* -- Hooks -- */
  /* -- Event Handlers -- */
  /* -- Rendering -- */
  return (
    <Container alignItems="center" justifyContent="space-between" px={3} variant={variant}>
      {children}
    </Container>
  );
};

StandardNotification.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['error', 'success']),
};

export default StandardNotification;
