import { getWindowLocation } from './utils/clientFunctions';
import { root } from './utils/root';
import Header from './components/Header';
import Passage from './components/Passage';
import Search from './components/Search';

const header = new Header();
const passage = new Passage();
const search = new Search();

fixture('Search').page(`${root}/search`);

test('Should render the search page', async (t) => {
  await t
    .expect(search.searchField.exists).ok()
    .expect(search.submitBtn.exists).ok();
});

test('Should display search results', async (t) => {
  await t
    .typeText(search.searchField, 'cheerful giver')
    .click(search.submitBtn)
    .expect(search.results.count).eql(1)
    .expect(search.getNthResult(0).container.textContent).contains('God loves a cheerful giver')
    .expect(search.getNthResult(0).reference.textContent).eql('2 Corinthians 9:7');
});

test('Should display message with no results', async (t) => {
  await t
    .typeText(search.searchField, 'asdfasdf')
    .click(search.submitBtn)
    .expect(search.noResults.exists).ok()
    .expect(search.noResults.textContent).eql('No results');
});

test('Should link to book and chapter', async (t) => {
  await t
    .typeText(search.searchField, 'cheerful giver')
    .click(search.submitBtn)
    .click(search.getNthResult(0).container);

  const location = await getWindowLocation();

  await t
    .expect(location.pathname).eql('/2corinthians/9')
    .expect(passage.getNthVerse(0).verseNumber).eql('1&nbsp;')
    .expect(passage.getNthVerse(0).verseText).eql('Now it is superfluous for me to write to you about the ministry for the saints, ')
    .expect(header.book.textContent).eql('2 Corinthians')
    .expect(header.chapter.textContent).eql('9');
});

test('Should show correct url', async (t) => {
  await t
    .typeText(search.searchField, 'test')
    .click(search.submitBtn);

  const location = await getWindowLocation();

  await t
    .expect(location.search).contains('q=test')
    .expect(location.search).contains('page=1');
});

test.page(`${root}/search?q=test&page=3`)('Should load correct results based on url', async (t) => {
  await t
    .expect(search.results.count).eql(20)
    .expect(search.getNthResult(0).container.textContent).contains('The crucible is for silver')
    .expect(search.getNthResult(0).reference.textContent).eql('Proverbs 17:3');
});

// ISSUE: Search results return 'Psalm' instead of 'Psalms'. This test ensures this stays fixed
test('Should link to book and chapter - Psalms', async (t) => {
  await t
    .typeText(search.searchField, 'walks not in the counsel')
    .click(search.submitBtn)
    .click(search.getNthResult(0).container);

  const location = await getWindowLocation();

  await t
    .expect(location.pathname).eql('/psalms/1')
    .expect(passage.getNthVerse(0).verseNumber).eql('1&nbsp;')
    .expect(passage.getNthVerse(0).verseText).contains('Blessed is the man')
    .expect(header.book.textContent).eql('Psalms')
    .expect(header.chapter.textContent).eql('1');
});
