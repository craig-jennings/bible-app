<script lang="ts">
	import ArrowUp from './icons/ArrowUp.svelte';
	import clsx from 'clsx';

	/* -- Runes -- */
	let isHidden = $state(true);

	let classes = $derived(clsx('container', isHidden && 'hide'));

	$effect(() => {
		let currentPosition = 0;

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
</script>

<button aria-label="Scroll to top of page" class={classes} onclick={handleClick}>
	<ArrowUp />
</button>

<style>
	.container {
		align-items: center;
		background-color: var(--neutral-500);
		block-size: 48px;
		border-radius: 50%;
		color: var(--neutral-100);
		cursor: pointer;
		display: flex;
		inline-size: 48px;
		inset: auto 24px 28px auto;
		justify-content: center;
		opacity: 0.9;
		position: fixed;
		transition: transform 0.4s var(--easing-1);

		&.hide {
			transform: translateY(6rem);
		}
	}
</style>
