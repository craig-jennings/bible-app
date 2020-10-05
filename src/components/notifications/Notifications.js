import { animated, useTransition } from 'react-spring';
import { Box, FlexBox } from '../base/Box';
import {
  useNotificationActionsContext,
  useNotificationStateContext,
} from '../../contexts/NotificationContext';
import { useState } from 'react';
import styled from 'styled-components';

const NotificationsContainer = styled(FlexBox)`
  bottom: 1rem;
  display: grid;
  left: 1.5rem;
  position: fixed;
  right: 1.5rem;
  z-index: 100;

  @media screen and (min-width: 768px) {
    grid-template-columns: 300px;
    left: 2rem;
    right: unset;
    width: 300px;
  }
`;

const NotificationContainer = styled(Box)`
  overflow: hidden;
  width: 100%;
`;

function Notifications() {
  /* -- Hooks -- */
  const [refMap] = useState(() => new WeakMap());
  const { removeNotification } = useNotificationActionsContext();
  const notifications = useNotificationStateContext();

  const animatedNotifications = useTransition(notifications, (n) => n.key, {
    config: {
      clamp: true,
      friction: 30,
      tension: 300,
    },

    enter: (item) => async (next) => {
      await next({
        height: refMap.get(item).offsetHeight,
        opacity: 1,
      });
    },

    from: {
      height: 0,
      opacity: 0,
    },

    leave: () => async (next) => {
      await next({ opacity: 0 });
      await next({ height: 0 });
    },
  });

  /* -- Rendering -- */
  const mappedNotifications = animatedNotifications.map(({ item, key, props }) => (
    <animated.div data-testid="notification" key={key} style={props}>
      <NotificationContainer
        onClick={() => removeNotification(item.key)}
        ref={(ref) => ref && refMap.set(item, ref)}
      >
        {item.content}
      </NotificationContainer>
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

export default Notifications;
