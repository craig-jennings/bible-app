<script lang="ts">
	import cx from 'utils/cx';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { class: klass, ...rest } = $props<HTMLInputAttributes>();
</script>

<input class={cx('input', klass)} type="text" {...rest} />

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
