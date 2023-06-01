// features/ColorPalettes/ColorPalletesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DEFAULT_PALETTE } from './ColorPalettes';

interface ColorPalleteState {
    colors: string[];
    twoBitsFlag: boolean;
}

const initialState: ColorPalleteState = {
    colors: DEFAULT_PALETTE,
    twoBitsFlag: true,
};

const colorPaletteSlice = createSlice({
    name: 'color-palette',
    initialState,
    reducers: {
        toggleTwoBitsFlag(state) {
            state.twoBitsFlag = !state.twoBitsFlag;
        },
        setColorPallete(state, action: PayloadAction<string[]>) {
            state.colors = [...action.payload]
        },
    }
});

export const { toggleTwoBitsFlag, setColorPallete } = colorPaletteSlice.actions;
export default colorPaletteSlice.reducer;