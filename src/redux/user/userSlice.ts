import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";

interface IBasketState {
    isLoading: boolean,
    error: null,
    user: any
  }


  const initialState: IBasketState = {
    isLoading: false,
    error: null,
    user: {},
}


export const userSlice = 
createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUserById.pending, state => {
            state.isLoading = true
        })
        .addCase(getUserById.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.user = action.payload
        })
        .addCase(getUserById.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.error = action.payload.error
            state.user = {}
        })
    },
})