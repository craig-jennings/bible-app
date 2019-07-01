import { getWindowScroll, setWindowScroll } from './utils/clientFunctions.js';
import { root } from './utils/root.js';
import ScrollerSelector from './components/ScrollerSelector.js';

const scrollerSelector = new ScrollerSelector('ba-shell |> ba-passage |> ba-scrollup');

fixture('Scroller Button').page(`${root}/genesis/1`);

test('Should scroll up', async (t) => {
  await t.expect(scrollerSelector.button.hasClass('hide')).ok();

  await setWindowScroll({ top: 100 });

  let scrollPosition = await getWindowScroll();

  await t
    .wait(200) // Animation wait
    .expect(scrollerSelector.button.hasClass('hide')).notOk()
    .expect(scrollPosition.scrollX).eql(0)
    .expect(scrollPosition.scrollY).eql(100)
    .click(scrollerSelector.button, { offsetY: 150 })
    .wait(500); // Scroll wait

  scrollPosition = await getWindowScroll();

  await t
    .expect(scrollPosition.scrollX).eql(0)
    .expect(scrollPosition.scrollY).eql(0);
});
