import { CloseIcon } from '../../base/Icons';
import { IconButton } from '../../base/Buttons';
import { NotificationType } from '../../../actions/notifications';
import NotificationContainer from './NotificationContainer';
import styled, { css } from 'styled-components';

const Container = styled(NotificationContainer)`
  ${({ type }) => {
    switch (type) {
      case NotificationType.ERROR:
        return css`
          background-color: var(--danger);
          color: var(--danger-text);
        `;

      case NotificationType.SUCCESS:
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

const StandardNotification = ({ contents, onDismiss, type }) => {
  const variant = {
    [NotificationType.ERROR]: 'danger',
    [NotificationType.SUCCESS]: 'primary',
  }[type];

  return (
    <Container alignItems="center" justifyContent="space-between" px={3} type={type}>
      <div>{contents.text}</div>

      <IconButton onClick={onDismiss} variant={variant}>
        <CloseIcon />
      </IconButton>
    </Container>
  );
};

StandardNotification.propTypes = {
  contents: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),

  onDismiss: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Object.values(NotificationType)),
};

export default StandardNotification;
