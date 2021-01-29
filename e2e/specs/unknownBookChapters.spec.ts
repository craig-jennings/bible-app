import { root } from '../utils/root';
import header from '../components/Header';
import page404 from '../components/Page404';

fixture('Unknown Book').page(`${root}/asdf`);

test('Should show error message', async (t) => {
  await t
    .expect(page404.container.exists).ok()
    .expect(header.book.textContent).eql('Unknown');
});

fixture('Unknown chapter')
  .page(`${root}/asdf/123`);

test('Should show error message', async (t) => {
  await t
    .expect(page404.container.exists).ok()
    .expect(header.book.textContent).eql('Unknown')
    .expect(header.chapter.textContent).eql('123');
});
