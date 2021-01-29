import { createContext, useContext, useMemo, useReducer } from 'react';
import { nanoid } from 'nanoid/non-secure';

interface Notification {
  content: JSX.Element;
  key: string;
}

type State = Notification[];

type NotificationAction =
  | { payload: Notification; type: 'ADD' }
  | { payload: string; type: 'REMOVE' }
  | { type: 'CLEAR' };

interface INotificationActionsContext {
  addNotification: (content: JSX.Element) => void;
  clearNotifications: () => void;
  removeNotification: (key: string) => void;
}

const MAX_NOTIFICATIONS = 3;
const NotificationStateContext = createContext<State>([]);

const NotificationActionsContext = createContext<INotificationActionsContext>({
  addNotification: () => null,
  clearNotifications: () => null,
  removeNotification: () => null,
});

function reducer(state: State, action: NotificationAction) {
  switch (action.type) {
    case 'ADD': {
      const notifications = [...state];

      if (notifications.length === MAX_NOTIFICATIONS) {
        notifications.pop();
      }

      notifications.unshift(action.payload);

      return notifications;
    }

    case 'CLEAR':
      return [];

    case 'REMOVE':
      return state.filter((n) => n.key !== action.payload);

    default:
      return state;
  }
}

const useNotificationActionsContext = () => useContext(NotificationActionsContext);
const useNotificationStateContext = () => useContext(NotificationStateContext);

interface NotificationProviderProps {
  children?: React.ReactNode;
}

function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, dispatch] = useReducer(reducer, []);

  const actions = useMemo(
    () => ({
      addNotification: (content: JSX.Element) => {
        dispatch({
          payload: {
            content,
            key: nanoid(),
          },

          type: 'ADD',
        });
      },

      clearNotifications: () => dispatch({ type: 'CLEAR' }),

      removeNotification: (key: string) => {
        dispatch({
          payload: key,
          type: 'REMOVE',
        });
      },
    }),
    [],
  );

  return (
    <NotificationActionsContext.Provider value={actions}>
      <NotificationStateContext.Provider value={notifications}>
        {children}
      </NotificationStateContext.Provider>
    </NotificationActionsContext.Provider>
  );
}

export { NotificationProvider, useNotificationActionsContext, useNotificationStateContext };
