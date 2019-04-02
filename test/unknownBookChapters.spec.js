import ChapterSelector from './components/ChapterSelector.js';
import Passage from './components/Passage.js';

fixture('Unknown Book')
  .page('127.0.0.1:8080/asdf')
  .beforeEach(({ ctx }) => {
    ctx.chapterSelector = new ChapterSelector('ba-shell |> ba-chapter-selector');
  });

test('Should show error message', async (t) => {
  const { chapterSelector } = t.ctx;

  await t.expect(chapterSelector.errorEl.exists).ok();
});

fixture('Unknown chapter')
  .page('127.0.0.1:8080/asdf/123')
  .beforeEach(({ ctx }) => {
    ctx.passage = new Passage('ba-shell |> ba-passage');
  });

test('Should show error message', async (t) => {
  const { passage } = t.ctx;

  await t.expect(passage.errorEl.exists).ok();
});
