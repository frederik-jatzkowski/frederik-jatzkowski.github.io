<script>
	import '../app.css';
</script>

<header class="container mx-auto px-32 py-2 sticky top-0 bg-purple-900 shadow-2xl grid grid-cols-8">
    <a href="/" class="col-span-1">
        <h1 class="font-sans text-center text-white">Frederik Jatzkowski</h1>
        <div class="h-px bg-amber-400 mt-1"/>
    </a>
</header>

<main class="container mx-auto px-32 py-8">
	<slot />
</main>

<footer class="container mx-auto px-32 py-2 bg-purple-900">
    <p class="text-amber-400 text-sm">
        © 2024 Frederik Jatzkowski. All Rights Reserved
    </p>
</footer>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
