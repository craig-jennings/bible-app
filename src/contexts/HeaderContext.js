import { createContext, useContext, useMemo, useReducer } from 'react';
import { findBookByValue } from '../data/findBook';

const HeaderStateContext = createContext(null);
const HeaderActionsContext = createContext(null);

const HeaderActionType = {
  SET: 'set',
  RESET: 'reset',
};

function reducer(state, { payload, type }) {
  switch (type) {
    case HeaderActionType.RESET:
      return {};

    case HeaderActionType.SET: {
      const { book, chapter } = payload;

      return {
        chapter,
        label: book.label,
        value: book.value,
      };
    }

    default:
      return state;
  }
}

const useHeaderActionsContext = () => useContext(HeaderActionsContext);
const useHeaderStateContext = () => useContext(HeaderStateContext);

function HeaderProvider({ children }) {
  const [header, dispatch] = useReducer(reducer, []);

  const actions = useMemo(() => {
    return {
      setHeader: (book, chapter) => {
        const bookValue = findBookByValue(book);

        dispatch({
          payload: {
            book: bookValue,
            chapter,
          },

          type: HeaderActionType.SET,
        });
      },

      resetHeader: () => dispatch({ type: HeaderActionType.RESET }),
    };
  }, []);

  return (
    <HeaderActionsContext.Provider value={actions}>
      <HeaderStateContext.Provider value={header}>{children}</HeaderStateContext.Provider>
    </HeaderActionsContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node,
};

export { HeaderProvider, useHeaderActionsContext, useHeaderStateContext };
