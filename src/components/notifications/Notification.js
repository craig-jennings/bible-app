import { removeNotification } from '../../actions/notifications';
import { useDispatch } from 'react-redux';
import getNotificationComponent from './getNotificationComponent';
import PropTypes from 'prop-types';

function Notification({ notification }) {
  const { contents, notificationType } = notification;

  /* -- Hooks -- */
  const dispatch = useDispatch();

  /* -- Event Handlers -- */
  const handleDismissClick = () => {
    dispatch(removeNotification(notification.key));
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
