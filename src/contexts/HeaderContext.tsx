import { createContext, PropsWithChildren, useContext, useMemo, useReducer } from 'react';
import { findBookByValue } from '@data/findBook';

type HeaderAction =
  | { type: 'RESET' }
  | {
      type: 'SET';
      payload: {
        book: { label: string; value: string };
        chapter?: string;
      };
    };

interface State {
  chapter?: string;
  label?: string;
  value?: string;
}

interface IHeaderActionsContext {
  resetHeader: () => void;
  setHeader: (book: string, chapter?: string) => void;
}

const HeaderStateContext = createContext<State>({});

const HeaderActionsContext = createContext<IHeaderActionsContext>({
  resetHeader: () => {},
  setHeader: () => {},
});

function reducer(state: State, action: HeaderAction): State {
  switch (action.type) {
    case 'RESET':
      return {};

    case 'SET': {
      const { book, chapter } = action.payload;

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

function HeaderProvider({ children }: PropsWithChildren<{}>) {
  const [header, dispatch] = useReducer(reducer, {});

  const actions = useMemo(
    () => ({
      setHeader: (book: string, chapter?: string) => {
        const bookValue = findBookByValue(book);

        dispatch({
          payload: {
            book: bookValue,
            chapter,
          },

          type: 'SET',
        });
      },

      resetHeader: () => dispatch({ type: 'RESET' }),
    }),
    [],
  );

  return (
    <HeaderActionsContext.Provider value={actions}>
      <HeaderStateContext.Provider value={header}>{children}</HeaderStateContext.Provider>
    </HeaderActionsContext.Provider>
  );
}

export { HeaderProvider, useHeaderActionsContext, useHeaderStateContext };
