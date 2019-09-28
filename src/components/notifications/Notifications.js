import { Box, FlexBox } from '../base/Box';
import { useSelector } from 'react-redux';
import Notification from './Notification';
import styled from 'styled-components';

const NotificationsContainer = styled(FlexBox)`
  bottom: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  left: 1.5rem;
  position: fixed;
  right: 1.5rem;
  z-index: 100;

  ${Box} {
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    left: 2rem;
    right: unset;
    width: 300px;
  }
`;

function Notifications() {
  const notifications = useSelector((state) => state.notifications);

  const notificationList = notifications.map((n) => (
    <Box key={n.key} mb={2}>
      <Notification notification={n} />
    </Box>
  ));

  return <NotificationsContainer>{notificationList}</NotificationsContainer>;
}

export default Notifications;
