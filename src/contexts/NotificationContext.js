import { createContext, useContext, useMemo, useReducer } from 'react';
import { nanoid } from 'nanoid/non-secure';

const MAX_NOTIFICATIONS = 3;
const NotificationStateContext = createContext(null);
const NotificationActionsContext = createContext(null);

const NotificationActionType = {
  ADD: 'add',
  CLEAR: 'clear',
  REMOVE: 'remove',
};

function reducer(state, { payload, type }) {
  switch (type) {
    case NotificationActionType.ADD: {
      const notifications = [...state];

      if (notifications.length === MAX_NOTIFICATIONS) {
        notifications.pop();
      }

      notifications.unshift(payload);

      return notifications;
    }

    case NotificationActionType.CLEAR:
      return [];

    case NotificationActionType.REMOVE:
      return state.filter((n) => n.key !== payload);

    default:
      return state;
  }
}

const useNotificationActionsContext = () => useContext(NotificationActionsContext);
const useNotificationStateContext = () => useContext(NotificationStateContext);

function NotificationProvider({ children }) {
  const [notifications, dispatch] = useReducer(reducer, []);

  const actions = useMemo(() => {
    return {
      addNotification: (content) => {
        dispatch({
          payload: {
            content,
            key: nanoid(),
          },

          type: NotificationActionType.ADD,
        });
      },

      clearNotifications: () => dispatch({ type: NotificationActionType.CLEAR }),

      removeNotification: (key) => {
        dispatch({
          payload: key,
          type: NotificationActionType.REMOVE,
        });
      },
    };
  }, []);

  return (
    <NotificationActionsContext.Provider value={actions}>
      <NotificationStateContext.Provider value={notifications}>
        {children}
      </NotificationStateContext.Provider>
    </NotificationActionsContext.Provider>
  );
}

NotificationProvider.propTypes = {
  children: PropTypes.node,
};

export { NotificationProvider, useNotificationActionsContext, useNotificationStateContext };
