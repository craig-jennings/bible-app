import { getWindowScroll, setWindowScroll } from '../utils/clientFunctions';
import { root } from '../utils/root';
import scrollUp from '../components/ScrollUp';

fixture('Scroller Button').page(`${root}/genesis/1`);

test.skip('Should scroll up', async (t) => {
  await setWindowScroll({ top: 100 });

  let scrollPosition = await getWindowScroll();

  await t
    .wait(200) // Animation wait
    .expect(scrollPosition.scrollX).eql(0)
    .expect(scrollPosition.scrollY).eql(100)
    .click(scrollUp.button)
    .wait(500); // Scroll wait

  scrollPosition = await getWindowScroll();

  await t
    .expect(scrollPosition.scrollX).eql(0)
    .expect(scrollPosition.scrollY).eql(0);
});
