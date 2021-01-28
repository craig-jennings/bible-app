import { root } from '../utils/root';
import chapterSelector from '../components/ChapterSelector';
import header from '../components/Header';
import passage from '../components/Passage';

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
