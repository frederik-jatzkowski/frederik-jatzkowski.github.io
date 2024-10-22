<script lang="ts">
	import P from '$lib/shared/presentation/typography/P.svelte';
	import type BlogPost from './BlogPost';

	export let post: BlogPost;
</script>

<article>
	<h2 class="font-sans text-3xl text-center text-purple-900 mb-4">
		{post.title}
	</h2>
	<h3 class="font-sans text-xl text-center text-purple-900 mb-16">
		{post.subtitle}
		<div class="h-px bg-amber-400 w-1/2 mx-auto mt-4" />
	</h3>
	
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
