<script lang="ts">
	import H2 from '$lib/shared/presentation/typography/H2.svelte';
	import P from '$lib/shared/presentation/typography/P.svelte';
	import POSTS from '../posts/posts';
	import type BlogPost from './BlogPost';
	import BlogPreviewCard from './BlogPreviewCard.svelte';
	import KeywordBadge from './KeywordBadge.svelte';

	export let post: BlogPost;
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.intro} />
</svelte:head>

<article>
	<h2 class="font-sans text-3xl text-center text-purple-900 mb-4">
		{post.title}
	</h2>
	<h3 class="font-sans text-xl text-center text-purple-900 mb-8">
		{post.subtitle}
		<div class="h-px bg-amber-400 w-1/2 mx-auto mt-4" />
	</h3>
	{#each post.keywords as keyword}
		<KeywordBadge {keyword} />
	{/each}

	<time datetime={post.date.toDateString()} class="block my-4">
		{post.date.toLocaleDateString()}
	</time>

	{#if post.heroImage}
		<div class="grid grid-cols-1 mb-8 lg:grid-cols-3 lg:gap-8">
			<div class="col-span-1">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src={post.heroImage} class="border-4 border-amber-400" />
			</div>
			<div class="col-span-2">
				<P>
					{post.intro}
				</P>
			</div>
		</div>
	{:else}
		<P>
			{post.intro}
		</P>
	{/if}

	<svelte:component this={post.body} />
</article>

<section class="mt-8 p-4 border-2 border-amber-400">
	<H2>Further Reading</H2>
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
		{#each POSTS.filter((each) => each.identifier != post.identifier).slice(0, 4) as post}
			<BlogPreviewCard {post} />
		{/each}
	</div>
</section>
