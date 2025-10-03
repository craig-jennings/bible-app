<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { fetchPassage } from '$lib/api/passage';
	import HammerElement from '$lib/components/common/HammerElement.svelte';
	import ScrollUp from '$lib/components/ScrollUp.svelte';
	import { historyStore } from '$lib/stores/historyStore.svelte';
	import type { HammerAction } from '$lib/types/HammerAction.js';
	import { findBook } from '$lib/utils/findBook';
	import requestWakeLock from '$lib/utils/requestWakeLock.svelte';

	interface Props {
		bookId: string;
		chapter: string;
	}

	/* -- Runes -- */
	const { bookId, chapter }: Props = $props();

	let passage = $derived(await fetchPassage(bookId, chapter));

	$effect.root(() => {
		historyStore.addEntry(bookId, chapter);
	});

	requestWakeLock();

	const book = findBook(bookId);

	/* -- Event Handlers -- */
	const actions: Array<HammerAction> = [
		{
			callback: (e) => {
				if (e.pointerType === 'mouse') return;

				const chapterNumber = parseInt(chapter, 10);

				if (book.chapterCount === chapterNumber) return;

				return goto(
					resolve('/[bookId]/[chapterId]', {
						bookId: book.key,
						chapterId: (chapterNumber + 1).toString(),
					}),
				);
			},

			event: 'swipeleft',
		},
		{
			callback: (e) => {
				if (e.pointerType === 'mouse') return;

				const chapterNumber = parseInt(chapter, 10);

				if (chapterNumber === 1) return;

				return goto(
					resolve('/[bookId]/[chapterId]', {
						bookId: book.key,
						chapterId: (chapterNumber - 1).toString(),
					}),
				);
			},

			event: 'swiperight',
		},
	];
</script>

<div class="passage">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<HammerElement {actions}>{@html passage}</HammerElement>
</div>

<ScrollUp />

<style>
	.passage {
		font-size: 1.25rem;
		margin: 0 auto 36px auto;
		max-width: 540px;
		width: 100%;
		view-transition-name: passage;

		& :global(p) {
			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	:global(.verse-num) {
		font-size: smaller;
		font-style: italic;
		vertical-align: super;
	}
</style>
