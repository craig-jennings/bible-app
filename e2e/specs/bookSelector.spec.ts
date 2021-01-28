import { getWindowLocation } from '../utils/clientFunctions';
import { root } from '../utils/root';
import bookSelector from '../components/BookSelector';
import chapterSelector from '../components/ChapterSelector';
import header from '../components/Header';

fixture('Book Selection').page(root);

test('Should list books', async (t) => {
  await t
    .expect(bookSelector.books.nth(0).textContent).eql('Genesis')
    .expect(bookSelector.books.nth(1).textContent).eql('Exodus')
    .expect(bookSelector.books.nth(65).textContent).eql('Revelation');
});

test('Should filter possible books - single letter', async (t) => {
  await t
    .typeText(bookSelector.filterInput, 'j')
    .expect(bookSelector.books.nth(0).textContent).eql('Joshua')
    .expect(bookSelector.books.count).eql(12);
});

test('Should filter possible books - full name', async (t) => {
  await t
    .typeText(bookSelector.filterInput, 'matthew')
    .expect(bookSelector.books.nth(0).textContent).eql('Matthew')
    .expect(bookSelector.books.count).eql(1);
});

test('Should filter possible books - random text', async (t) => {
  await t
    .typeText(bookSelector.filterInput, 'lkjdfskjfa')
    .expect(bookSelector.books.count).eql(0);
});

test('Click should open chapter selector', async (t) => {
  await t.click(bookSelector.books.nth(0));

  const location = await getWindowLocation();

  await t
    .expect(chapterSelector.chapters.count).eql(50)
    .expect(location.pathname).eql('/genesis')
    .expect(header.book.textContent).eql('Genesis');
});
