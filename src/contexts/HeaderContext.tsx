import { createContext, useContext, useMemo, useReducer } from 'react';
import { findBookByValue } from '@data/findBook';

type HeaderAction =
  | { type: 'RESET' }
  | {
      type: 'SET';
      payload: {
        book: { label: string; value: string };
        chapter?: string;
      };
    }
  | {
      type: 'STICKY';
      payload: boolean;
    };

interface State {
  chapter?: string;
  label?: string;
  sticky?: boolean;
  value?: string;
}

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

    case 'STICKY': {
      return {
        ...state,
        sticky: action.payload,
      };
    }

    default:
      return state;
  }
}

interface ActionsContext {
  /** Resets the header to the basic state */
  resetHeader: () => void;
  /** Sets the header's book and (optionally) chapter */
  setHeader: (book: string, chapter?: string) => void;
  /** Sets whether the header should be sticky or not */
  setSticky: (value: boolean) => void;
}

const HeaderActionsContext = createContext<ActionsContext | null>(null);
const HeaderStateContext = createContext<State>({});

const useHeaderActionsContext = () => useContext(HeaderActionsContext) as ActionsContext;
const useHeaderStateContext = () => useContext(HeaderStateContext);

function HeaderProvider({ children }: OnlyChildren) {
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

      setSticky: (payload: boolean) => dispatch({ payload, type: 'STICKY' }),
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
