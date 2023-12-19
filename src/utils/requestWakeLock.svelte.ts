function requestWakeLock() {
	$effect(() => {
		let wakeLock: WakeLockSentinel | null = null;

		(async () => {
			try {
				wakeLock = await navigator.wakeLock.request();
			} catch (err) {
				console.log('failed to reserve a wake lock');
			}
		})();

		return () => wakeLock?.release();
	});
}

export default requestWakeLock;
