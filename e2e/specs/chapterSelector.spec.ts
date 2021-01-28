import { getWindowLocation } from '../utils/clientFunctions';
import { root } from '../utils/root';
import chapterSelector from '../components/ChapterSelector';
import header from '../components/Header';
import passage from '../components/Passage';

fixture('Chapter Selection').page(`${root}/genesis`);

test('Should list chapters', async (t) => {
  await t
    .expect(chapterSelector.chapters.nth(0).textContent).eql('1')
    .expect(chapterSelector.chapters.count).eql(50);
});

test('Should filter possible chapters - single number', async (t) => {
  await t
    .typeText(chapterSelector.filterInput, '1')
    .expect(chapterSelector.chapters.nth(0).textContent).eql('1')
    .expect(chapterSelector.chapters.nth(1).textContent).eql('10')
    .expect(chapterSelector.chapters.count).eql(14);
});

test('Should filter possible books - complete chapter', async (t) => {
  await t
    .typeText(chapterSelector.filterInput, '11')
    .expect(chapterSelector.chapters.nth(0).textContent).eql('11')
    .expect(chapterSelector.chapters.count).eql(1);
});

test('Click should open chapter selector', async (t) => {
  await t.click(chapterSelector.chapters.nth(0));

  const location = await getWindowLocation();

  await t
    .expect(passage.getNthVerse(0).verseNumber).eql('1&nbsp;')
    .expect(passage.getNthVerse(0).verseText).eql('In the beginning, God created the heavens and the earth. ')
    .expect(location.pathname).eql('/genesis/1')
    .expect(header.book.textContent).eql('Genesis')
    .expect(header.chapter.textContent).eql('1');
});
