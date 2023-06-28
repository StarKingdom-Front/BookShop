import { combineReducers, configureStore } from "@reduxjs/toolkit";

import basket from './slices/basketSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        basket,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch