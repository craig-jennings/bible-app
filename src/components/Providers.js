import { HeaderProvider } from '../contexts/HeaderContext';
import { NotificationProvider } from '../contexts/NotificationContext';

const Providers = ({ children }) => (
  <HeaderProvider>
    <NotificationProvider>{children}</NotificationProvider>
  </HeaderProvider>
);

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
