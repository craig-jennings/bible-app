<script lang="ts">
	import clsx from 'clsx';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		children: Snippet;
	}

	const { children, class: klass, ...rest }: Props = $props();
</script>

<button class={clsx('button', klass)} {...rest}>
	{@render children()}
</button>

<style>
	.button {
		background-color: var(--neutral-800);
		border: 1px solid var(--neutral-500);
		border-radius: 0.75rem;
		color: var(--neutral-100);
		height: 48px;
		padding: 0.5rem 1rem;
		transition: all 0.25s;

		&:focus,
		&:hover {
			background-color: var(--neutral-500);
			cursor: pointer;
			outline: none;
		}
	}

	.button[disabled] {
		background-color: inherit;
		border-color: var(--neutral-300);
		color: var(--neutral-300);

		&:focus,
		&:hover {
			background-color: inherit;
			cursor: not-allowed;
		}
	}
</style>
