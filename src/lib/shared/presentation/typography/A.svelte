<script lang="ts">
	export let href: string;
	export let target: '_blank' | '_self' | '_parent' | '_top' = '_self';
</script>

<a class={`font-sans text-base text-justify py-2 text-amber-300 underline`} {href} {target}>
	<slot />
</a>
