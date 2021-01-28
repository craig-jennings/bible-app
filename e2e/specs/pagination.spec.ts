import { root } from '../utils/root';
import pagination from '../components/Pagination';
import search from '../components/Search';

fixture('Pagination').page(`${root}/search`);

test('Should show the range', async (t) => {
  await t
    .typeText(search.searchField, 'test')
    .click(search.submitBtn)
    .expect(pagination.prevBtn.exists).ok()
    .expect(pagination.nextBtn.exists).ok()
    .expect(pagination.prevBtn.hasAttribute('disabled')).ok()
    .expect(pagination.nextBtn.hasAttribute('disabled')).notOk();

  const range = await pagination.range.textContent;

  await t.expect(range.trim()).eql('1 - 20 of 99');
});

test('Should show the buttons', async (t) => {
  await t
    .typeText(search.searchField, 'test')
    .click(search.submitBtn)
    .expect(pagination.prevBtn.exists).ok()
    .expect(pagination.nextBtn.exists).ok()
    .expect(pagination.prevBtn.hasAttribute('disabled')).ok()
    .expect(pagination.nextBtn.hasAttribute('disabled')).notOk();
});

test('Should go to next and previous pages', async (t) => {
  await t
    .typeText(search.searchField, 'test')
    .click(search.submitBtn)
    .expect(search.getNthResult(0).reference.textContent).contains('Genesis 22:1')
    .expect(pagination.nextBtn.textContent).eql('Next')
    .click(pagination.nextBtn)
    .expect(search.getNthResult(0).reference.textContent).contains('1 Kings 10:1')
    .expect(pagination.prevBtn.hasAttribute('disabled')).notOk()
    .expect(pagination.nextBtn.hasAttribute('disabled')).notOk();

  let range = await pagination.range.textContent;

  await t.expect(range.trim()).eql('21 - 40 of 99');

  await t
    .click(pagination.prevBtn)
    .expect(search.getNthResult(0).reference.textContent).contains('Genesis 22:1')
    .expect(pagination.prevBtn.hasAttribute('disabled')).ok()
    .expect(pagination.nextBtn.hasAttribute('disabled')).notOk();

  range = await pagination.range.textContent;

  await t.expect(range.trim()).eql('1 - 20 of 99');
});

test('Should not show range when no results', async (t) => {
  await t
    .typeText(search.searchField, 'asdfjasdf')
    .click(search.submitBtn)
    .expect(pagination.prevBtn.hasAttribute('disabled')).ok()
    .expect(pagination.nextBtn.hasAttribute('disabled')).ok();

  const range = await pagination.range.textContent;

  await t.expect(range.trim()).eql('');
});
