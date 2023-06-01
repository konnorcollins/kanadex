// app/Store.ts
import { configureStore } from '@reduxjs/toolkit';

import colorPaletteReducer from '../features/ColorPalettes/ColorPaletteSlice';

export const store = configureStore({
    reducer: {
        colorPalette: colorPaletteReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;