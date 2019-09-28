import { root } from './utils/root';
import ChapterSelector from './components/ChapterSelector';
import Header from './components/Header';
import Passage from './components/Passage';

const chapterSelector = new ChapterSelector();
const header = new Header();
const passage = new Passage();

fixture('Unknown Book').page(`${root}/asdf`);

test('Should show error message', async (t) => {
  await t
    .expect(chapterSelector.errorEl.exists).ok()
    .expect(header.book.textContent).eql('Unknown');
});

fixture('Unknown chapter')
  .page(`${root}/asdf/123`);

test('Should show error message', async (t) => {
  await t
    .expect(passage.errorEl.exists).ok()
    .expect(header.book.textContent).eql('Unknown')
    .expect(header.chapter.textContent).eql('123');
});
