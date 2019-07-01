import { root } from './utils/root.js';
import PaginationComponent from './components/PaginationComponent.js';
import SearchComponent from './components/SearchComponent.js';

const paginationComponent = new PaginationComponent('ba-shell |> ba-search |> ba-pagination');
const searchComponent = new SearchComponent('ba-shell |> ba-search');

fixture('Pagination').page(`${root}/search`);

test('Should show the range', async (t) => {
  await t
    .typeText(searchComponent.searchField, 'test')
    .click(searchComponent.submitBtn)
    .expect(paginationComponent.prevBtn.exists).ok()
    .expect(paginationComponent.nextBtn.exists).ok()
    .expect(paginationComponent.prevBtn.classNames).contains('disabled');

  const range = await paginationComponent.range.textContent;

  await t.expect(range.trim()).eql('1 - 20 of 99');
});

test('Should show the buttons', async (t) => {
  await t
    .typeText(searchComponent.searchField, 'test')
    .click(searchComponent.submitBtn)
    .expect(paginationComponent.prevBtn.exists).ok()
    .expect(paginationComponent.nextBtn.exists).ok()
    .expect(paginationComponent.prevBtn.classNames).contains('disabled')
    .expect(paginationComponent.nextBtn.classNames).notContains('disabled');
});

test.skip('Should go to next and previous pages', async (t) => {
  await t
    .typeText(searchComponent.searchField, 'test')
    .click(searchComponent.submitBtn)
    .expect(searchComponent.getNthResult(0).textContent).contains('Genesis 22:1')
    .expect(paginationComponent.nextBtn.textContent).eql('Next')
    .click(paginationComponent.nextBtn)
    .expect(searchComponent.getNthResult(0).textContent).contains('1 Kings 10:1')
    .expect(paginationComponent.prevBtn.classNames).notContains('disabled')
    .expect(paginationComponent.nextBtn.classNames).notContains('disabled');

  let range = await paginationComponent.range.textContent;

  await t.expect(range.trim()).eql('21 - 40 of 99');

  await t
    .click(paginationComponent.prevBtn)
    .expect(searchComponent.getNthResult(0).textContent).contains('Genesis 22:1')
    .expect(paginationComponent.prevBtn.classNames).contains('disabled')
    .expect(paginationComponent.nextBtn.classNames).notContains('disabled');

  range = await paginationComponent.range.textContent;

  await t.expect(range.trim()).eql('1 - 20 of 99');
});

test('Should not show range when no results', async (t) => {
  await t
    .typeText(searchComponent.searchField, 'asdfjasdf')
    .click(searchComponent.submitBtn)
    .expect(paginationComponent.prevBtn.classNames).contains('disabled')
    .expect(paginationComponent.nextBtn.classNames).contains('disabled');

  const range = await paginationComponent.range.textContent;

  await t.expect(range.trim()).eql('');
});
