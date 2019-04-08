import { getWindowLocation } from './utils/clientFunctions.js';
import { root } from './utils/root.js';
import ChapterSelector from './components/ChapterSelector.js';
import Header from './components/Header.js';
import Passage from './components/Passage.js';

const chapterSelector = new ChapterSelector('ba-shell |> ba-chapter-selector');
const header = new Header('ba-shell |> ba-header');
const passage = new Passage('ba-shell |> ba-passage');

fixture('Chapter Selection').page(`${root}/genesis`);

test('Should list chapters', async (t) => {
  await t
    .expect(chapterSelector.getNthChapter(0).textContent).eql('1')
    .expect(chapterSelector.getAllChapters().count).eql(50);
});

test('Should filter possible chapters - single number', async (t) => {
  await t
    .typeText(chapterSelector.filterInput, '1')
    .expect(chapterSelector.getNthChapter(0).textContent).eql('1')
    .expect(chapterSelector.getNthChapter(1).textContent).eql('10')
    .expect(chapterSelector.getAllChapters().count).eql(14);
});

test('Should filter possible books - complete chapter', async (t) => {
  await t
    .typeText(chapterSelector.filterInput, '11')
    .expect(chapterSelector.getNthChapter(0).textContent).eql('11')
    .expect(chapterSelector.getAllChapters().count).eql(1);
});

test('Click should open chapter selector', async (t) => {
  await t.click(chapterSelector.getNthChapter(0));

  const location = await getWindowLocation();

  await t
    .expect(passage.getNthVerse(0).verseNumber).eql('1&nbsp;')
    .expect(passage.getNthVerse(0).verseText).eql('In the beginning, God created the heavens and the earth. ')
    .expect(location.pathname).eql('/genesis/1')
    .expect(header.book.textContent).eql('Genesis')
    .expect(header.chapter.textContent).eql('1');
});
