import { LS_PATH_KEY } from './components/base/LocationTracker';
import { NotificationProvider } from './contexts/NotificationContext';
import { Provider } from 'react-redux';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import ReactDOM from 'react-dom';
import store from './store';
import SWInstaller from './components/SWInstaller';

(() => {
  const currentPath = localStorage.getItem(LS_PATH_KEY);

  if (currentPath && window.location.pathname !== currentPath) {
    window.location = currentPath;

    return;
  }

  const Root = () => (
    <Provider store={store}>
      <NotificationProvider>
        <GlobalStyles />
        <App />
        <SWInstaller />
      </NotificationProvider>
    </Provider>
  );

  ReactDOM.render(<Root />, document.querySelector('main'));
})();
