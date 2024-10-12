<script>
	import { base } from '$app/paths';
	import A from '$lib/shared/presentation/typography/A.svelte';
	import P from '$lib/shared/presentation/typography/P.svelte';
	import '../app.css';
</script>

<header class="container mx-auto px-32 py-2 sticky top-0 bg-blue-900 shadow-xl grid grid-cols-8">
    <a href={`${base}/`} class="col-span-1">
        <h1 class="font-sans text-center text-white">Frederik Jatzkowski</h1>
        <div class="h-px bg-amber-400 mt-1"/>
    </a>
</header>

<main class="container mx-auto px-32 py-8">
	<slot />
</main>

<footer class="container mx-auto px-32 py-2 bg-blue-900">
    <P>
        © 2024 Frederik Jatzkowski. All Rights Reserved
    </P>
</footer>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
