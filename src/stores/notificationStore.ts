import { nanoid } from 'nanoid/non-secure';
import create from 'zustand';
import pick from 'lodash/pick';
import shallow from 'zustand/shallow';

interface Notification {
  content: JSX.Element;
  key: string;
}

interface Actions {
  addNotification: (content: JSX.Element) => void;
  clearNotifications: () => void;
  removeNotification: (key: string) => void;
}

interface State {
  notifications: Notification[];
}

const MAX_NOTIFICATIONS = 3;

const useNotificationStore = create<Actions & State>((set, get) => ({
  notifications: [],

  addNotification: (content) => {
    const notifications = [...get().notifications];

    if (notifications.length === MAX_NOTIFICATIONS) {
      notifications.pop();
    }

    notifications.unshift({
      content,
      key: nanoid(),
    });

    set({ notifications });
  },

  clearNotifications: () => set({ notifications: [] }),

  removeNotification: (key) => {
    const notifications = [...get().notifications].filter((n) => n.key !== key);

    set({ notifications });
  },
}));

function useNotificationActions() {
  return useNotificationStore(
    (state) => pick(state, ['addNotification', 'clearNotifications', 'removeNotification']),
    shallow,
  );
}

function useNotificationState() {
  return useNotificationStore((state) => state.notifications);
}

export default useNotificationStore;
export { useNotificationActions, useNotificationState };
