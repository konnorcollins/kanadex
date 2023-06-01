// features/ColorPalettes/ColorPalletesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ColorPalette, DEFAULT_PALETTE } from './ColorPalettes';

interface ColorPalleteState {
    palette: ColorPalette;
    twoBitsFlag: boolean;
}

const initialState: ColorPalleteState = {
    palette: DEFAULT_PALETTE,
    twoBitsFlag: true,
};

const colorPaletteSlice = createSlice({
    name: 'color-palette',
    initialState,
    reducers: {
        toggleTwoBitsFlag(state) {
            state.twoBitsFlag = !state.twoBitsFlag;
        },
        setColorPallete(state, action: PayloadAction<ColorPalette>) {
            state.palette = action.payload;
        },
    }
});

export const { toggleTwoBitsFlag, setColorPallete } = colorPaletteSlice.actions;
export default colorPaletteSlice.reducer;