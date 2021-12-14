import { findBookByValue } from '@data/findBook';
import create from 'zustand';
import pick from 'lodash/pick';
import shallow from 'zustand/shallow';

interface Actions {
  resetHeader: () => void;
  setHeader: (book: string, chapter?: string) => void;
  setSticky: (isSticky: boolean) => void;
}

interface State {
  bookLabel?: string;
  bookValue?: string;
  chapter?: string;
  isSticky: boolean;
}

const DEFAULT_STATE: State = {
  bookLabel: '',
  bookValue: '',
  chapter: '',
  isSticky: false,
};

const useHeaderStore = create<Actions & State>((set) => ({
  ...DEFAULT_STATE,
  resetHeader: () => set({ ...DEFAULT_STATE }),

  setHeader: (book, chapter) => {
    const { label, value } = findBookByValue(book);

    set({
      bookValue: value,
      bookLabel: label,
      chapter,
    });
  },

  setSticky: (isSticky) => set({ isSticky }),
}));

function useHeaderActions() {
  return useHeaderStore((state) => pick(state, ['resetHeader', 'setHeader', 'setSticky']), shallow);
}

function useHeaderState() {
  return useHeaderStore((state) => pick(state, ['bookLabel', 'bookValue', 'chapter', 'isSticky']), shallow);
}

export default useHeaderStore;
export { useHeaderActions, useHeaderState };
