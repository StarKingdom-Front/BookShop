import { configureStore } from "@reduxjs/toolkit";

import basket from './slices/basketSlice'

export const store = configureStore({
    reducer: {
        basket
    }
})