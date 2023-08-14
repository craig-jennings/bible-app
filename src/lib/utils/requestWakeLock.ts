import { onDestroy, onMount } from 'svelte';

function requestWakeLock() {
	let wakeLock: WakeLockSentinel;

	onMount(async () => {
		try {
			wakeLock = await navigator.wakeLock.request();
		} catch (err) {
			console.log('failed to reserve a wake lock');
		}
	});

	onDestroy(() => {
		wakeLock?.release();
	});
}

export default requestWakeLock;
