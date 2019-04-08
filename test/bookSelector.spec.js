import { getWindowLocation } from './utils/clientFunctions.js';
import { root } from './utils/root.js';
import BookSelector from './components/BookSelector.js';
import ChapterSelector from './components/ChapterSelector.js';
import Header from './components/Header.js';

const bookSelector = new BookSelector('ba-shell |> ba-book-selector');
const chapterSelector = new ChapterSelector('ba-shell |> ba-chapter-selector');
const header = new Header('ba-shell |> ba-header');

fixture('Book Selection')
  .page(root);

test('Should list books', async (t) => {
  await t
    .expect(bookSelector.getNthBook(0).textContent).eql('Genesis')
    .expect(bookSelector.getNthBook(1).textContent).eql('Exodus')
    .expect(bookSelector.getNthBook(65).textContent).eql('Revelation');
});

test('Should filter possible books - single letter', async (t) => {
  await t
    .typeText(bookSelector.filterInput, 'j')
    .expect(bookSelector.getNthBook(0).textContent).eql('Joshua')
    .expect(bookSelector.getAllBooks().count).eql(12);
});

test('Should filter possible books - full name', async (t) => {
  await t
    .typeText(bookSelector.filterInput, 'matthew')
    .expect(bookSelector.getNthBook(0).textContent).eql('Matthew')
    .expect(bookSelector.getAllBooks().count).eql(1);
});

test('Should filter possible books - random text', async (t) => {
  await t
    .typeText(bookSelector.filterInput, 'lkjdfskjfa')
    .expect(bookSelector.getAllBooks().count).eql(0);
});

test('Click should open chapter selector', async (t) => {
  await t.click(bookSelector.getNthBook(0));

  const location = await getWindowLocation();

  await t
    .expect(chapterSelector.getAllChapters().count).eql(50)
    .expect(location.pathname).eql('/genesis')
    .expect(header.book.textContent).eql('Genesis');
});
