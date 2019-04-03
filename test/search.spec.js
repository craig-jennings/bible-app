import { getWindowLocation } from './utils/clientFunctions.js';
import { root } from './utils/root.js';
import Passage from './components/Passage.js';
import SearchComponent from './components/SearchComponent.js';

fixture('Search')
  .page(`${root}/search`)
  .beforeEach(({ ctx }) => {
    ctx.searchComponent = new SearchComponent('ba-shell |> ba-search');
  });

test('Should render the search page', async (t) => {
  const { searchComponent } = t.ctx;

  await t
    .expect(searchComponent.searchField.exists).ok()
    .expect(searchComponent.submitBtn.exists).ok();
});

test('Should display search results', async (t) => {
  const { searchComponent } = t.ctx;

  await t
    .typeText(searchComponent.searchField, 'cheerful giver')
    .click(searchComponent.submitBtn)
    .expect(searchComponent.getAllResults().count).eql(1)
    .expect(searchComponent.getNthResult(0).textContent).contains('God loves a cheerful giver')
    .expect(searchComponent.getNthResult(0).textContent).contains('2 Corinthians 9:7');
});

test('Should link to book and chapter', async (t) => {
  const { searchComponent } = t.ctx;

  await t
    .typeText(searchComponent.searchField, 'cheerful giver')
    .click(searchComponent.submitBtn)
    .click(searchComponent.getNthResult(0).link);

  const location = await getWindowLocation();
  const passage = new Passage('ba-shell |> ba-passage');

  await t
    .expect(location.pathname).eql('/2corinthians/9')
    .expect(passage.getNthVerse(0).verseNumber).eql('1&nbsp;')
    .expect(passage.getNthVerse(0).verseText).eql('Now it is superfluous for me to write to you about the ministry for the saints, ');
});
