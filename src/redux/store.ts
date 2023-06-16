import { combineReducers, configureStore } from "@reduxjs/toolkit";

import basket from './slices/basketSlice'
import { userSlice } from "./user/userSlice";

const reducers = combineReducers({
    user: userSlice
})

export const store = configureStore({
    reducer: {
        basket,
        reducers
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch