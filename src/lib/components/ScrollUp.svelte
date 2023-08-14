<script lang="ts">
	import { onMount } from 'svelte';
	import cx from '$lib/utils/cx';
	import UpCaret from './icons/UpCaret.svelte';

	/* -- Props & Vars -- */
	let currentPosition = 0;
	let isHidden = true;

	/* -- Lifecycle -- */
	onMount(() => {
		function callback() {
			if (window.scrollY === 0 || window.scrollY > currentPosition) {
				isHidden = true;
			} else {
				isHidden = false;
			}

			currentPosition = window.scrollY;
		}

		document.addEventListener('scroll', callback, { passive: true });

		return () => document.removeEventListener('scroll', callback);
	});

	/* -- Event Handlers -- */
	function handleClick() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		});
	}

	/* -- Rendering -- */
	$: classes = cx('container', isHidden && 'hide');
</script>

<button class={classes} on:click={handleClick}>
	<UpCaret />
</button>

<style>
	.container {
		align-items: center;
		background-color: var(--neutral500);
		border-radius: 50%;
		bottom: 1.5rem;
		color: var(--neutral100);
		cursor: pointer;
		display: flex;
		height: 3rem;
		justify-content: center;
		opacity: 0.9;
		position: fixed;
		right: 1.5rem;
		transition: transform 0.4s var(--easing1);
		width: 3rem;
	}

	.hide {
		transform: translateY(6rem);
	}
</style>
