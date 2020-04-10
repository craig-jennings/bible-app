import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import ReactDOM from 'react-dom';
import SWInstaller from './components/SWInstaller';

const Root = () => (
  <>
    <GlobalStyles />
    <App />
    <SWInstaller />
  </>
);

ReactDOM.render(<Root />, document.querySelector('main'));
