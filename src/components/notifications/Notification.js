import { removeNotifications } from '../../actions/notifications';
import { useDispatch } from 'react-redux';
import getNotificationComponent from './getNotificationComponent';

function Notification({ notification }) {
  const { contents, key, notificationType } = notification;

  /* -- Hooks -- */
  const dispatch = useDispatch();

  /* -- Event Handlers -- */
  const handleDismissClick = () => dispatch(removeNotifications({ key }));

  /* -- Rendering -- */
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
