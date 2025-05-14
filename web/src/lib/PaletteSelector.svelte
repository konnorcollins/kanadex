<script lang="ts">
    import {globalPalette, ALL_PALETTES} from '$lib/palettes.svelte'
    import type { ColorPalette } from '$lib/palettes.svelte';

    function handlePalette(palette: ColorPalette) {
        globalPalette.colorPalette = palette
    }

    function handleBits() {
        globalPalette.twoBits = !globalPalette.twoBits
    }
</script>

<div>
    {#each ALL_PALETTES as palette (palette.name)}
        <button onclick={() => handlePalette(palette)}>{palette.name}</button>
    {/each}

    {#snippet bitsButton(label: string)}
        <button onclick={handleBits}>{label}</button>
    {/snippet}

    {#if globalPalette.twoBits}
        {@render bitsButton('two-bits')}
    {:else}
        {@render bitsButton('one-bit')}
    {/if}
</div>

<style>
    div {
        display: flex
    }

    button {
        color: white;
        background-color: black;
    }
</style>