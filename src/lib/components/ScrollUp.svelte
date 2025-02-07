<script lang="ts">
	import ArrowUp from './icons/ArrowUp.svelte';

	/* -- Runes -- */
	let isHidden = $state(true);

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

<button aria-label="Scroll to top of page" class={['container', isHidden && 'hide']} onclick={handleClick}>
	<ArrowUp />
</button>

<style>
	.container {
		align-items: center;
		background-color: var(--color-zinc-700);
		block-size: 48px;
		border-radius: 50%;
		color: var(--color-zinc-50);
		cursor: pointer;
		display: flex;
		inline-size: 48px;
		inset: auto 16px 28px auto;
		justify-content: center;
		opacity: 0.9;
		position: fixed;
		transition: translate 200ms var(--ease-out-quart);

		&.hide {
			translate: 0 6rem;
		}
	}
</style>
