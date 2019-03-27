import { getWindowLocation } from './utils/clientFunctions.js';
import ChapterSelector from './components/ChapterSelector.js';
import Passage from './components/Passage.js';

fixture('Chapter Selection')
  .page('127.0.0.1:8080/genesis')
  .beforeEach(({ ctx }) => {
    ctx.chapterSelector = new ChapterSelector('ba-shell |> ba-chapter-selector');
  });

test('Should list chapters', async (t) => {
  const { chapterSelector } = t.ctx;

  await t
    .expect(chapterSelector.getNthChapter(0).textContent).eql('1')
    .expect(chapterSelector.getAllChapters().count).eql(50);
});

test('Should filter possible chapters - single number', async (t) => {
  const { chapterSelector } = t.ctx;

  await t
    .typeText(chapterSelector.filterInput, '1')
    .expect(chapterSelector.getNthChapter(0).textContent).eql('1')
    .expect(chapterSelector.getNthChapter(1).textContent).eql('10')
    .expect(chapterSelector.getAllChapters().count).eql(14);
});

test('Should filter possible books - complete chapter', async (t) => {
  const { chapterSelector } = t.ctx;

  await t
    .typeText(chapterSelector.filterInput, '11')
    .expect(chapterSelector.getNthChapter(0).textContent).eql('11')
    .expect(chapterSelector.getAllChapters().count).eql(1);
});

test('Click should open chapter selector', async (t) => {
  const { chapterSelector } = t.ctx;

  await t.click(chapterSelector.getNthChapter(0));

  const passage = new Passage('ba-shell |> ba-passage');
  const location = await getWindowLocation();

  await t
    .expect(passage.getNthVerse(0).verseNumber).eql('1&nbsp;')
    .expect(passage.getNthVerse(0).verseText).eql('In the beginning, God created the heavens and the earth. ')
    .expect(location.pathname).eql('/genesis/1');
});
