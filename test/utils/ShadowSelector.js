import { Selector } from 'testcafe';

const ShadowSelector = Selector((selector, root = document, separator = '|>') => {
  const segments = selector.split(separator);

  return segments.reduce((element, segment) => {
    const el = element.querySelector(segment);

    if (!el) {
      return element;
    }

    if (el.shadowRoot) {
      return el.shadowRoot;
    }

    return el;
  }, root);
});

export default ShadowSelector;
