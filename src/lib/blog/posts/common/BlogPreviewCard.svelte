<script lang="ts">
	import { base } from '$app/paths';
	import type BlogPost from './BlogPost';

	export let post: BlogPost;
</script>

<a
	class="max-w-sm overflow-hidden shadow-lg bg-amber-400 col-span-1"
	id="outer"
	href={`${base}/blog/${encodeURIComponent(post.identifier)}`}
>
	<!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> -->
	<div class="px-6 py-4">
		<div class="text-xs text-blue-900">{post.date.toLocaleDateString()}</div>
		<div class="text-xl mb-4 text-blue-900">{post.title}</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={post.heroImage} />
		<!-- <div class="text-base mb-2 text-amber-100">{post.subtitle}</div> -->
		<p class="text-blue-900 text-base mt-4">
			{post.intro}
		</p>
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
