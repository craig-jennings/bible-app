const { HeaderProvider } = require('./contexts/HeaderContext');
const { NotificationProvider } = require('./contexts/NotificationContext');

const Providers = ({ children }) => (
  <HeaderProvider>
    <NotificationProvider>{children}</NotificationProvider>
  </HeaderProvider>
);

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
