<script lang="ts">
	import findBook from 'utils/findBook';
	import HammerElement from 'components/common/HammerElement.svelte';
	import requestWakeLock from 'utils/requestWakeLock.svelte';
	import ScrollUp from 'components/ScrollUp.svelte';
	import type { HammerAction } from 'types/HammerAction.js';

	interface Props {
		book: string;
		chapter: string;
		passage: string;
	}

	/* -- Runes -- */
	const { book: bookKey, chapter, passage } = $props<Props>();

	const book = findBook(bookKey);

	requestWakeLock();

	/* -- Event Handlers -- */
	const actions: Array<HammerAction> = [
		{
			callback: (e) => {
				if (e.pointerType === 'mouse') return;

				const chapterNumber = parseInt(chapter, 10);

				if (book.chapterCount === chapterNumber) return;

				window.location.href = `/${book.key}/${chapterNumber + 1}`;
			},

			event: 'swipeleft',
		},
		{
			callback: (e) => {
				if (e.pointerType === 'mouse') return;

				const chapterNumber = parseInt(chapter, 10);

				if (chapterNumber === 1) return;

				window.location.href = `/${book.key}/${chapterNumber - 1}`;
			},

			event: 'swiperight',
		},
	];
</script>

<div class="passage">
	<HammerElement {actions}>{@html passage}</HammerElement>
</div>

<ScrollUp />

<style>
	.passage {
		font-size: 1.25rem;
		max-width: 540px;
		width: 100%;
		margin: 0 auto;

		& p {
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
