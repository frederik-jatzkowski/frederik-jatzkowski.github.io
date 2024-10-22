<script lang="ts">
	import BlogPage from '$lib/blog/posts/common/BlogPage.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<BlogPage post={data.post} />
