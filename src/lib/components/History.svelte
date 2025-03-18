<script lang="ts">
	import Close from './icons/Close.svelte';
	import History from './icons/History.svelte';
	import { onNavigate } from '$app/navigation';
	import { historyStore } from '$lib/stores/historyStore.svelte';
	import { onMount } from 'svelte';

	/* -- Runes -- */
	let currentTranslate = $state<number | undefined>(0);
	let dialogRef = $state<HTMLDialogElement>();
	let open = $state(false);

	let entries = $derived.by(() => {
		return historyStore.entries.slice(1);
	});

	onMount(() => {
		let containerWidth = 0;
		let currentX = 0;
		let prevX = 0;

		const closeEventListener = () => {
			open = false;
			currentTranslate = undefined;
		};

		const touchMoveEventListener = (e: TouchEvent) => {
			const touch = e.touches[0];

			const x = touch.clientX;

			prevX = currentX;
			currentX = x;

			if (x > prevX) {
				currentTranslate = Math.min(0, (currentTranslate || 0) + (x - prevX));
			} else {
				currentTranslate = Math.max(containerWidth * -1, (currentTranslate || 0) - (prevX - x));
			}
		};

		const touchStartEventListener = (e: TouchEvent) => {
			const touch = e.touches[0];

			dialogRef?.style.setProperty('--translate-duration', '0');

			containerWidth = dialogRef?.getBoundingClientRect().width || 0;
			currentX = touch.clientX;
			prevX = touch.clientX;
		};

		const touchEndEventListener = () => {
			dialogRef?.style.removeProperty('--translate-duration');

			if (currentX < prevX) {
				open = false;
			} else {
				currentTranslate = undefined;
			}
		};

		dialogRef?.addEventListener('close', closeEventListener);
		dialogRef?.addEventListener('touchend', touchEndEventListener);
		dialogRef?.addEventListener('touchmove', touchMoveEventListener);
		dialogRef?.addEventListener('touchstart', touchStartEventListener);

		return () => {
			dialogRef?.removeEventListener('close', closeEventListener);
			dialogRef?.removeEventListener('touchend', touchEndEventListener);
			dialogRef?.removeEventListener('touchmove', touchMoveEventListener);
			dialogRef?.removeEventListener('touchstart', touchStartEventListener);
		};
	});

	onNavigate(() => {
		open = false;
	});

	$effect(() => {
		if (open) {
			dialogRef?.showModal();
			currentTranslate = 0;
		} else {
			dialogRef?.close();
		}
	});

	/* -- Event Handlers -- */
</script>

{#if entries.length > 0}
	<button class="indicator" onclick={() => (open = !open)}>
		<History />
	</button>
{/if}

<dialog
	bind:this={dialogRef}
	style:--translate-x={Number.isInteger(currentTranslate) ? `${currentTranslate}px` : undefined}
>
	<div class="border-color-neutral-700 flex justify-between border-b-2 px-4 py-2">
		<h2>History</h2>
		<button aria-label="Close History" onclick={() => (open = false)} type="button"><Close /></button>
	</div>

	{#each entries as entry (`${entry.book.key}/${entry.chapter}`)}
		<a class="block" href="/{entry.book.key}/{entry.chapter}">{entry.book.label} {entry.chapter}</a>
	{/each}
</dialog>

<style>
	:global(html:has(.open)) {
		overflow: hidden;
	}

	::view-transition-group(history) {
		animation: none;
	}

	dialog {
		--transition-duration: 200ms;
		--transition-timing-function: var(--ease-out-cubic);

		background-color: var(--color-zinc-800);
		block-size: 100%;
		color: inherit;
		display: none;
		inline-size: 80vw;
		inset-block: 0;
		max-block-size: 100%;
		opacity: 0;
		outline: none;
		transition:
			display var(--transition-duration) allow-discrete,
			opacity var(--transition-duration) var(--transition-timing-function),
			overlay var(--transition-duration) allow-discrete,
			translate var(--translate-duration, var(--transition-duration)) var(--transition-timing-function);
		translate: -100% 0;
		view-transition-name: history;

		@media (width> 640px) {
			inline-size: 325px;
		}

		&::backdrop {
			background-color: oklch(0 0 0 / 0);
			transition: background-color var(--transition-duration) var(--transition-timing-function);
		}

		&[open] {
			display: block;
			opacity: 1;
			translate: var(--translate-x, 0) 0;

			@starting-style {
				opacity: 0;
				translate: -100% 0;
			}

			&::backdrop {
				background-color: oklch(0 0 0 / 0.6);

				@starting-style {
					background-color: oklch(0 0 0 / 0);
				}
			}
		}
	}

	h2 {
		align-content: center;
		block-size: 48px;
		font-size: 32px;
	}

	a {
		align-content: center;
		block-size: 48px;
		border-block-end: 1px solid var(--color-zinc-700);
		font-size: 24px;
		inline-size: 100%;
		padding-inline: 32px;
	}

	.indicator {
		align-items: center;
		background-color: var(--color-zinc-700);
		block-size: 48px;
		border-radius: 0 32px 32px 0;
		display: flex;
		inline-size: 36px;
		inset: auto auto 28px 0;
		justify-content: center;
		opacity: 0.9;
		position: fixed;
	}
</style>
