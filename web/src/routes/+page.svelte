<script lang="ts">
    import '../styles/app.css'

	import BitCanvas from "$lib/BitCanvas.svelte";
    import sampleImage from '$lib/violin_concerto.png'
	import { onMount } from "svelte";
	import PaletteSelector from '$lib/PaletteSelector.svelte';

    let image = $state<HTMLImageElement>()


    onMount(() => {
        image = new Image(195, 164);
        image.src = sampleImage;
    })
    
</script>

<main>
    <h1>Welcome to SvelteKit</h1>
    <p>Front-end rewrite</p>
    
    
    {#if image}
        <BitCanvas {image}></BitCanvas>
    {:else}
        <p>Loading...</p>
    {/if}

    <PaletteSelector />
</main>



<style>
    main {
        width: 80%;

        background-color: grey;
    }
</style>