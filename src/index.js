import { Provider } from 'react-redux';
import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import ReactDOM from 'react-dom';
import store from './store';
import SWInstaller from './components/SWInstaller';

const Root = () => (
  <Provider store={store}>
    <GlobalStyles />
    <App />
    <SWInstaller />
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector('main'));
