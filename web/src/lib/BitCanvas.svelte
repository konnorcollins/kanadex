<script lang="ts">
	import { getColorString, getColorValues, translateColor } from './colors';
	import { globalPalette, type ColorPalette } from './palettes.svelte';

	let { image }: { image: HTMLImageElement } = $props();
	let imageData: ImageData = $derived(
		colorize(image, globalPalette.twoBits, globalPalette.colorPalette)
	);

	let canvasRef = $state<HTMLCanvasElement>();
	let canvasCtx = $derived(canvasRef?.getContext('2d'));

	function colorize(image: HTMLImageElement, twoBits: boolean, colorPalette: ColorPalette) {
		const width = image.width;
		const height = image.height;

		const offscreen = new OffscreenCanvas(width, height);
		const ctx = offscreen.getContext('2d');

		if (!ctx) return new ImageData(0, 0);

		ctx.drawImage(image, 0, 0);
		const imageData = ctx.getImageData(0, 0, width, height);

		for (let i = 0; i < imageData.data.length; i += 4) {
			// grab the hex value, (optionally) translate it to the selected palette, then set the rgb values manually
			const originalHex = getColorString(
				imageData.data[i],
				imageData.data[i + 1],
				imageData.data[i + 2]
			);
			const translatedHex = translateColor(originalHex, twoBits, ...colorPalette.colors);
			const [r, g, b] = getColorValues(translatedHex);

			imageData.data[i] = r;
			imageData.data[i + 1] = g;
			imageData.data[i + 2] = b;
			//imgData.data[i + 3] = 255; // uncomment in case we need an alpha channel clamp
		}

		return imageData;
	}

	$effect(() => {
		canvasCtx?.putImageData(imageData, 0, 0);
	});
</script>

<div>
	<canvas bind:this={canvasRef}> </canvas>
</div>

<style>
	canvas {
		border: 2px solid black;
		width: 100%;
	}
</style>
