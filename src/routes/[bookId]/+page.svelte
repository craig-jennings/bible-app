<script lang="ts">
	import { page } from '$app/stores';
	import Chapter from '$lib/components/Chapter.svelte';

	/* -- Runes -- */
	/* -- Event Handlers -- */
</script>

<Chapter book={$page.params.bookId} />
