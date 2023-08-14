<script lang="ts">
	import cx from '$lib/utils/cx';

	export let type: HTMLButtonElement['type'] = 'button';

	$: classes = cx('button', $$restProps.class);
</script>

<button
	{...$$restProps}
	class={classes}
	{type}
	on:blur
	on:change
	on:click
	on:focus
	on:mouseenter
	on:mouseleave
	on:mouseover
>
	<slot />
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
