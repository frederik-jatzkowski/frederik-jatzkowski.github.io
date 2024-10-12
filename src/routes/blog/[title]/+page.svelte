<script lang="ts">
	import { page } from '$app/stores';
	import BlogPage from '$lib/blog/posts/common/BlogPage.svelte';
	import { MAPPED_POSTS } from '$lib/blog/posts/posts';

	let title = $page.params.title;

	let post = MAPPED_POSTS.get(title);
</script>

{#if post}
	<BlogPage {post} />
{/if}
