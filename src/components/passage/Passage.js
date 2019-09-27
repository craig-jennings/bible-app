import 'wc-spinners/dist/orbit-spinner';
import { CenterBox } from '../base/Box';
import { decrementPassage, incrementPassage } from '../../actions/passage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import Hammer from 'hammerjs';
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
  const dispatch = useDispatch();

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

      dispatch(incrementPassage());
    });

    hammerInstance.on('swiperight', (e) => {
      if (e.pointerType === 'mouse') return;

      dispatch(decrementPassage());
    });

    return () => hammerInstance.destroy();
  });
};

function Passage() {
  const { isLoaded, text } = useSelector((state) => state.passage);

  const passageRef = useRef();

  useHammerEffect(passageRef);

  if (!isLoaded) {
    return (
      <CenterBox>
        <orbit-spinner color="white" />
      </CenterBox>
    );
  }

  if (isLoaded && text.length === 0) {
    return <Page404 />;
  }

  return <PassageContainer dangerouslySetInnerHTML={{ __html: text }} ref={passageRef} />;
}

export default Passage;
