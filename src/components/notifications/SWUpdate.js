import { Button } from '../base/Buttons';
import { FlexBox } from '../base/Box';
import NotificationContainer from './NotificationContainer';
import styled from 'styled-components';

const Container = styled(NotificationContainer)`
  background-color: var(--neutral);
  color: var(--neutral-text);
`;

const RefreshButton = styled(Button)`
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
`;

function SWUpdate() {
  const handleRefreshClick = () => window.location.reload();

  return (
    <Container alignItems="center" justifyContent="space-between" px={3}>
      <div>Update Available</div>

      <FlexBox alignItems="center">
        <RefreshButton onClick={handleRefreshClick}>Refresh?</RefreshButton>
      </FlexBox>
    </Container>
  );
}

export default SWUpdate;
