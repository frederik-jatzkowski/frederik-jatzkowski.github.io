<script lang="ts">
	import { base } from '$app/paths';
	import type BlogPost from './BlogPost';
	import KeywordBadge from './KeywordBadge.svelte';

	export let post: BlogPost;
</script>

<a
	class="max-w-sm overflow-hidden shadow-lg bg-amber-400 col-span-1"
	id="outer"
	href={`${base}/blog/${encodeURIComponent(post.identifier)}`}
>
	<!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> -->
	<div class="px-6 py-4">
		<div class="text-xs text-purple-900">{post.date.toLocaleDateString()}</div>
		<div class="text-xl mb-4 text-purple-900">{post.title}</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={post.heroImage} />
		<!-- <div class="text-base mb-2 text-white">{post.subtitle}</div> -->
		<p class="text-purple-900 text-base my-4">
			{post.intro}
		</p>
		{#each post.keywords as keyword}
			<KeywordBadge {keyword} />
		{/each}
	</div>
</a>

<style>
	#outer {
		transition: transform 0.2s ease;
		cursor: pointer;
	}

	#outer:hover {
		transform: scale(1.02);
	}
</style>
