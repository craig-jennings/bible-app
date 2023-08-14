<script lang="ts">
	import cx from '$lib/utils/cx';

	export let value = '';

	let classes = '';

	$: classes = cx('input', $$restProps.class);
</script>

<input
	{...$$restProps}
	class={classes}
	type="text"
	bind:value
	on:blur
	on:change
	on:click
	on:contextmenu
	on:focus
	on:input
	on:keydown
	on:keypress
	on:keyup
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:paste
/>

<style>
	.input {
		background-color: var(--neutral800);
		border: 2px solid var(--neutral500);
		border-radius: 0.75rem;
		color: var(--neutral100);
		font-size: 1.25rem;
		height: 48px;
		line-height: 2rem;
		padding-left: 1rem;
		width: 100%;
		transition: border-color 0.15s;

		&:focus {
			border-color: var(--primary100);
			outline: none;
		}
	}
</style>
