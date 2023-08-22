import { writable } from 'svelte/store';
import type { BibleBook } from '$lib/types/BibleBook';

type State = {
	book?: BibleBook;
	chapter?: string;
};

const headerStore = writable<State>({});

export default headerStore;