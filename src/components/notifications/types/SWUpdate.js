import { Button, IconButton } from '../../base/Buttons';
import { CloseIcon } from '../../base/Icons';
import { FlexBox } from '../../base/Box';
import NotificationContainer from './NotificationContainer';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled(NotificationContainer)`
  background-color: var(--neutral);
  color: var(--neutral-text);
`;

const RefreshButton = styled(Button)`
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
`;

function SWUpdate({ onDismiss }) {
  const handleRefreshClick = () => window.location.reload();

  return (
    <Container alignItems="center" justifyContent="space-between" px={3}>
      <div>Update Available</div>

      <FlexBox alignItems="center">
        <RefreshButton onClick={handleRefreshClick}>Refresh?</RefreshButton>

        <IconButton onClick={onDismiss}>
          <CloseIcon />
        </IconButton>
      </FlexBox>
    </Container>
  );
}

SWUpdate.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};

export default SWUpdate;
