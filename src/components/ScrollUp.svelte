<script lang="ts">
	import cx from 'utils/cx';
	import UpCaret from './icons/UpCaret.svelte';

	/* -- Runes -- */
	let isHidden = $state(true);

	let classes = $derived(cx('container', isHidden && 'hide'));

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

<button class={classes} onclick={handleClick}>
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

		&.hide {
			transform: translateY(6rem);
		}
	}
</style>
