<script lang="ts">
	import P from '$lib/shared/presentation/typography/P.svelte';
	import POSTS from '$lib/blog/posts/posts';
	import BlogPreviewCard from '$lib/blog/engine/BlogPreviewCard.svelte';
	import A from '$lib/shared/presentation/typography/A.svelte';
	import { assets } from '$app/paths';
	import H2 from '$lib/shared/presentation/typography/H2.svelte';
	import Img from '$lib/shared/presentation/img/Img.svelte';
</script>

<svelte:head>
	<title>Frederik Jatzkowski</title>
</svelte:head>

<section class="p-4 border-2 border-amber-400">
	<div class="grid grid-cols-2 gap-2 lg:grid-cols-5 md:grid-cols-5">
		<div class="col-span-3">
			<H2>About Me</H2>
			<P>Software Engineer @ CHECK24, Germany</P>
			<P>
				<A href="https://github.com/frederik-jatzkowski" target="_blank">Github</A>
				| <A href="https://www.linkedin.com/in/frederik-jatzkowski/" target="_blank">LinkedIn</A>
			</P>
		</div>
		<div class="col-span-2 grid grid-cols-1 gap-2 lg:grid-cols-2">
			<Img
				src={`${assets}/media/mittelerde24/speaking.jpg`}
				caption="Speaking at the 5th Central German Meeting on Bioinformatics."
			/>
			<Img
				src={`${assets}/media/focusdays24/me.jpg`}
				caption="Collaborating at the FocusDays Hackathon 2024 hosted by CHECK24."
			/>
		</div>
	</div>
</section>

<section class="mt-8 p-4 border-2 border-amber-400">
	<H2>Latest Posts</H2>
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-4  md:grid-cols-2">
		{#each POSTS.slice(0, 4) as post}
			<BlogPreviewCard {post} />
		{/each}
	</div>
</section>
