import { getWindowLocation } from './utils/clientFunctions.js';
import { root } from './utils/root.js';
import Header from './components/Header.js';
import Passage from './components/Passage.js';
import SearchComponent from './components/SearchComponent.js';

const header = new Header('ba-shell |> ba-header');
const passage = new Passage('ba-shell |> ba-passage');
const searchComponent = new SearchComponent('ba-shell |> ba-search');

fixture('Search').page(`${root}/search`);

test('Should render the search page', async (t) => {
  await t
    .expect(searchComponent.searchField.exists).ok()
    .expect(searchComponent.submitBtn.exists).ok();
});

test('Should display search results', async (t) => {
  await t
    .typeText(searchComponent.searchField, 'cheerful giver')
    .click(searchComponent.submitBtn)
    .expect(searchComponent.getAllResults().count).eql(1)
    .expect(searchComponent.getNthResult(0).textContent).contains('God loves a cheerful giver')
    .expect(searchComponent.getNthResult(0).textContent).contains('2 Corinthians 9:7');
});

test('Should display message with no results', async (t) => {
  await t
    .typeText(searchComponent.searchField, 'asdfasdf')
    .click(searchComponent.submitBtn)
    .expect(searchComponent.noResults.exists).ok()
    .expect(searchComponent.noResults.textContent).eql('No results');
});

test('Should link to book and chapter', async (t) => {
  await t
    .typeText(searchComponent.searchField, 'cheerful giver')
    .click(searchComponent.submitBtn)
    .click(searchComponent.getNthResult(0).link);

  const location = await getWindowLocation();

  await t
    .expect(location.pathname).eql('/2corinthians/9')
    .expect(passage.getNthVerse(0).verseNumber).eql('1&nbsp;')
    .expect(passage.getNthVerse(0).verseText).eql('Now it is superfluous for me to write to you about the ministry for the saints, ')
    .expect(header.book.textContent).eql('2 Corinthians')
    .expect(header.chapter.textContent).eql('9');
});

// ISSUE: Search results return 'Psalm' instead of 'Psalms'. This test ensures this stays fixed
test('Should link to book and chapter - Psalms', async (t) => {
  await t
    .typeText(searchComponent.searchField, 'walks not in the counsel')
    .click(searchComponent.submitBtn)
    .click(searchComponent.getNthResult(0).link);

  const location = await getWindowLocation();

  await t
    .expect(location.pathname).eql('/psalms/1')
    .expect(passage.getNthVerse(0).verseNumber).eql('1&nbsp;')
    .expect(passage.getNthVerse(0).verseText).contains('Blessed is the man')
    .expect(header.book.textContent).eql('Psalms')
    .expect(header.chapter.textContent).eql('1');
});
