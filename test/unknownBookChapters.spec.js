import { root } from './utils/root.js';
import ChapterSelector from './components/ChapterSelector.js';
import Header from './components/Header.js';
import Passage from './components/Passage.js';

const chapterSelector = new ChapterSelector('ba-shell |> ba-chapter-selector');
const header = new Header('ba-shell |> ba-header');
const passage = new Passage('ba-shell |> ba-passage');

fixture('Unknown Book')
  .page(`${root}/asdf`);

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
