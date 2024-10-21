<script lang="ts">
    export let src: string
    export let caption: string
    export let alt: string = caption
</script>

<div class="border-4 border-amber-400 bg-amber-400 ">
    <img {src} {alt} class=""/>
    <div class="text-purple-900 p-1 text-sm">
        {caption}
    </div>
</div>