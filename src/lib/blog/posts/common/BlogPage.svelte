<script lang="ts">
	import P from '$lib/shared/presentation/typography/P.svelte';
	import type BlogPost from './BlogPost';

	export let post: BlogPost;
</script>

<h2 class="font-sans text-3xl text-center text-purple-900 mb-4">
	{post.title}
</h2>
<h3 class="font-sans text-xl text-center text-purple-900 mb-16">
	{post.subtitle}
	<div class="h-px bg-amber-400 w-1/2 mx-auto mt-4" />
</h3>

{#if post.heroImage}
	<div class="grid grid-cols-3 gap-8 mb-8">
        <div>
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={post.heroImage} class="col-span-1 border-4 border-amber-400" />
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
