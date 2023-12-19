<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import cx from 'utils/cx';

	interface Props {
		children: Snippet<void>;
	}

	const { children, type = 'button', ...rest } = $props<HTMLButtonAttributes & Props>();
</script>

<button class={cx('button', rest.class)} {type} {...rest}>
	{@render children()}
</button>

<style>
	.button {
		background-color: var(--neutral800);
		border: 1px solid var(--neutral500);
		border-radius: 0.75rem;
		color: var(--neutral100);
		height: 48px;
		padding: 0.5rem 1rem;
		transition: all 0.25s;

		&:focus,
		&:hover {
			background-color: var(--neutral500);
			cursor: pointer;
			outline: none;
		}
	}

	.button[disabled] {
		background-color: inherit;
		border-color: var(--neutral300);
		color: var(--neutral300);

		&:focus,
		&:hover {
			background-color: inherit;
			cursor: not-allowed;
		}
	}
</style>
