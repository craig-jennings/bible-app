import './service-worker/sw-installer';
import App from './App';
import GlobalStyles from './GlobalStyles';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <GlobalStyles />
    <App />
  </div>,
  document.querySelector('main'),
);
