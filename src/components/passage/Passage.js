import 'wc-spinners/dist/orbit-spinner';
import { CenterBox } from '../base/Box';
import { collect, PropTypes } from 'react-recollect';
import { decrementPassage, incrementPassage } from '../../actions/passage';
import { useEffect, useRef } from 'react';
import Hammer from 'hammerjs';
import LoadState from '../../utils/LoadState';
import Page404 from '../errors/Page404';
import styled from 'styled-components';

const PassageContainer = styled.div`
  font-size: 1.25rem;
  margin: 0 1rem;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    width: 40%;
  }

  /* Styles for returned passage */
  p {
    margin-bottom: 1rem;
  }

  .verse-num {
    font-size: smaller;
    font-style: italic;
    vertical-align: super;
  }
`;

const useHammerEffect = (ref) => {
  useEffect(() => {
    if (!ref.current) return undefined;

    const hammerInstance = new Hammer(ref.current, {
      cssProps: {
        userSelect: 'auto',
      },

      recognizers: [
        [
          Hammer.Swipe,
          {
            direction: Hammer.DIRECTION_LEFT | Hammer.DIRECTION_RIGHT, // eslint-disable-line no-bitwise
            threshold: 100,
            velocity: 0.5,
          },
        ],
      ],
    });

    hammerInstance.on('swipeleft', (e) => {
      if (e.pointerType === 'mouse') return;

      incrementPassage();
    });

    hammerInstance.on('swiperight', (e) => {
      if (e.pointerType === 'mouse') return;

      decrementPassage();
    });

    return () => hammerInstance.destroy();
  });
};

function Passage({ store }) {
  const { loadState, text } = store.passage;

  const passageRef = useRef();

  useHammerEffect(passageRef);

  if (loadState === LoadState.LOADING) {
    return (
      <CenterBox>
        <orbit-spinner color="white" />
      </CenterBox>
    );
  }

  if (loadState === LoadState.ERROR) {
    return <Page404 />;
  }

  return (
    <PassageContainer
      dangerouslySetInnerHTML={{ __html: text }}
      data-testid="passage"
      ref={passageRef}
    />
  );
}

Passage.propTypes = {
  store: PropTypes.shape({
    passage: PropTypes.shape({
      loadState: PropTypes.oneOf(LoadState),
      text: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default collect(Passage);
