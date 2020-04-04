import { NotificationType } from '../../actions/notifications';
import StandardNotification from './types/StandardNotification';
import SWUpdate from './types/SWUpdate';

const notificationMap = {
  [NotificationType.SERVICE_WORKER]: SWUpdate,
};

function getNotificationComponent(notificationType) {
  return notificationMap[notificationType] || StandardNotification;
}

export default getNotificationComponent;
