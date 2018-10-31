import './components/shell/ba-shell.js';
import './styles.css';
import { bookSelectorPage, chapterSelectorPage, passagePage, unknownPage } from './pages.js';
import page from 'page';

page('/', bookSelectorPage);
page('/:book', chapterSelectorPage);
page('/:book/:chapter', passagePage);
page('*', unknownPage);

page.start();
