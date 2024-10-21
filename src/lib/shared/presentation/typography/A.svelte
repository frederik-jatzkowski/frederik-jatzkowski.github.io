<script lang="ts">
	export let href: string;
	export let target: '_blank' | '_self' | '_parent' | '_top' = '_self';
</script>

<a class={`font-sans text-base text-justify py-2 text-purple-900/70 hover:text-purple-900 underline decoration-amber-400`} {href} {target}>
	<slot />
</a>
