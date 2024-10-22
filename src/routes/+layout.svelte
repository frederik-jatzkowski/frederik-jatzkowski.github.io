<script>
	import '../app.css';
</script>

<header class="px-8 py-2 sticky top-0 left-0 right-0 bg-purple-900 shadow-2xl grid grid-cols-1 lg:px-32 lg:grid-cols-4 md:grid-cols-4" style="z-index: 100;">
    <a href="/" class="col-span-1">
        <h1 class="font-sans text-center text-white">Frederik Jatzkowski</h1>
        <div class="h-px bg-amber-400 mt-1"/>
    </a>
</header>

<main class="container mx-auto px-8 py-8 lg:px-32 ">
	<slot />
</main>

<footer class="mx-auto px-8 py-2 bg-purple-900 lg:px-32 lg:grid-cols-8 md:grid-cols-4">
    <p class="text-amber-400 text-sm">
        © 2024 Frederik Jatzkowski. All Rights Reserved
    </p>
</footer>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
