import { PropTypes } from 'react-recollect';
import { removeNotification } from '../../actions/notifications';
import getNotificationComponent from './getNotificationComponent';

function Notification({ notification }) {
  const { contents, key, notificationType } = notification;

  /* -- Event Handlers -- */
  const handleDismissClick = () => {
    removeNotification(key);
  };

  const Component = getNotificationComponent(notificationType);

  return <Component contents={contents} onDismiss={handleDismissClick} type={notificationType} />;
}

Notification.propTypes = {
  notification: PropTypes.shape({
    contents: PropTypes.objectOf(PropTypes.any),
    key: PropTypes.number.isRequired,
    notificationType: PropTypes.string.isRequired,
  }).isRequired,
};

export default Notification;
