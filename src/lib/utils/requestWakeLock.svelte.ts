function requestWakeLock() {
	$effect(() => {
		let wakeLock: WakeLockSentinel | null = null;

		void navigator.wakeLock.request().then((lock) => {
			wakeLock = lock;
		});

		return () => wakeLock?.release();
	});
}

export default requestWakeLock;
