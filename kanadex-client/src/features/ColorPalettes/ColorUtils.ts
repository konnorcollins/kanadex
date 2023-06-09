// src/features/ColorPalettes/ColorUtils.ts

// converts r,g,b values between 0-255 into a 6-digit hex string
export const getColorString = (r: number, g: number, b: number): string => {
    const rstr = r.toString(16).padStart(2, '0');
    const gstr = g.toString(16).padStart(2, '0');
    const bstr = b.toString(16).padStart(2, '0');
    return rstr + gstr + bstr
}

// converts a 6-digit hex string into r,g,b values between 0-255 (inclusive)
export const getColorValues = (hex: string): Array<number> => {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return [r, g, b]
}

const BASE_COLOR_0 = "000000"; // white
const BASE_COLOR_1 = "ffffff"; // black
const BASE_COLOR_2 = "ff40ff"; // bright pink
const BASE_COLOR_3 = "c000c0"; // dark pink

// handles translating the expected stock colors into your selected palette
export const translateColor = (hex: string, twoBit: boolean, ...altColors: string[]): string =>
{
    // just in case we somehow mess up the parameters
    if (altColors.length != 2 && altColors.length != 4) return hex;

    switch(hex)
    {
        case(BASE_COLOR_0):
            return altColors[0];
        case(BASE_COLOR_1):
            return altColors[1];
        case(BASE_COLOR_2):
            return twoBit ? altColors[2] : altColors[0];
        case(BASE_COLOR_3):
            return twoBit ? altColors[3] : altColors[1];
        default:
            return hex;
    }
}