<script lang="ts">
	import Close from './icons/Close.svelte';
	import History from './icons/History.svelte';
	import { onNavigate } from '$app/navigation';
	import { swipable } from '$lib/attachments/swipable.svelte';
	import { historyStore } from '$lib/stores/historyStore.svelte';

	/* -- Runes -- */
	let dialogEl = $state<HTMLDialogElement>();
	let open = $state(false);

	let entries = $derived(historyStore.entries.slice(1));

	onNavigate(() => {
		open = false;
	});

	$effect(() => {
		if (open) {
			dialogEl?.showModal();
		} else {
			dialogEl?.close();
		}
	});

	/* -- Event Handlers -- */
	const handleClose = () => {
		open = false;
	};
</script>

{#if entries.length > 0}
	<button aria-label="View History" class="indicator" onclick={() => (open = true)} type="button">
		<History />
	</button>
{/if}

<dialog {@attach swipable({ onSwipeLeft: handleClose })} bind:this={dialogEl} onclose={handleClose}>
	<div class="border-color-neutral-700 flex justify-between border-b-2 px-4 py-2" data-swipable="false">
		<h2>History</h2>

		<button aria-label="Close History" onclick={handleClose} type="button">
			<Close />
		</button>
	</div>

	{#each entries as entry (`${entry.book.key}/${entry.chapter}`)}
		<a class="block" href="/{entry.book.key}/{entry.chapter}">{entry.book.label} {entry.chapter}</a>
	{/each}
</dialog>

<style>
	::view-transition-group(history) {
		animation: none;
	}

	dialog {
		--transition-duration: 250ms;
		--transition-timing-function: var(--ease-out-cubic);

		background-color: var(--color-zinc-800);
		block-size: 100%;
		color: inherit;
		display: none;
		inline-size: 80vw;
		inset-block: 0;
		max-block-size: 100%;
		outline: none;
		transition:
			display var(--transition-duration) allow-discrete,
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
			translate: var(--translate-x, 0) 0;

			@starting-style {
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
