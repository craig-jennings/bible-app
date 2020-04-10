import { animated, useTransition } from 'react-spring';
import { collect, PropTypes } from 'react-recollect';
import { FlexBox } from '../base/Box';
import Notification from './Notification';
import styled from 'styled-components';

const NotificationsContainer = styled(FlexBox)`
  bottom: 1rem;
  left: 1.5rem;
  position: fixed;
  right: 1.5rem;
  z-index: 100;

  @media screen and (min-width: 768px) {
    left: 2rem;
    right: unset;
    width: 300px;
  }
`;

function Notifications({ store: { notifications } }) {
  /* -- Hooks -- */
  const animatedNotifications = useTransition(notifications, (n) => n.key, {
    config: {
      clamp: true,
      friction: 30,
      tension: 300,
    },

    enter: {
      height: 64,
      opacity: 1,
      transform: 'translateY(0)',
    },

    from: {
      height: 0,
      opacity: 0,
      transform: 'translateY(200px)',
    },

    leave: () => async (next) => {
      await next({ opacity: 0 });
      await next({ height: 0 });
    },
  });

  /* -- Rendering -- */
  const mappedNotifications = animatedNotifications.map(({ item, key, props }) => (
    <animated.div key={key} style={props} data-testid="notification">
      <Notification notification={item} />
    </animated.div>
  ));

  return (
    <NotificationsContainer
      data-testid="notifications"
      flexDirection="column"
      justifyContent="flex-end"
    >
      {mappedNotifications}
    </NotificationsContainer>
  );
}

Notifications.propTypes = {
  store: PropTypes.shape({
    notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default collect(Notifications);
