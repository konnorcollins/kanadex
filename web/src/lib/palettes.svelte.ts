export interface ColorPalette {
    name: string,
    colors: string[],
}

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


class GlobalPalette {
    colorPalette = $state<ColorPalette>(DEFAULT_PALETTE)
    twoBits = $state<boolean>(false)
}

export const globalPalette = new GlobalPalette()