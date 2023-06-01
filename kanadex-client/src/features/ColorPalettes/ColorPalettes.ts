// features/ColorPalettes/ColorPalettes.ts

// EXPECTED STOCK COLORS
// "000000"; // white
// "FFFFFF"; // black
// "FF40FF"; // bright pink
// "C000C0"; // dark pink

export interface ColorPalette {
    name: string,
    colors: string[],
}

// factory to create objects
// I am NOT creating them all manually
const createPalette = (name: string, colors: string[]): ColorPalette => {
    return {
        name: name,
        colors: colors
    }
}


export const DEFAULT_PALETTE = createPalette("Stock", ["000000", "ffffff", "ff40ff", "c000c0"]);
export const RETRO_DARK = createPalette("Retro (Dark)", ["182005","769518","3c4d0c","182005"]);
export const GOTHIC = createPalette("Gothic", ["3f352d", "b3ab98", "a83d33", "7b8779"]);
export const ALL_PALETTES = [DEFAULT_PALETTE, RETRO_DARK, GOTHIC];
