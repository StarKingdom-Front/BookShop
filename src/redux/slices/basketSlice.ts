import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit'
import { IBook } from '../../modals';
import { RootState } from '../store';


interface IBasketState {
  totalPrice: number,
  items: IBook[],
}

const initialState: IBasketState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find(obj => obj.id === action.payload);
      
      if(findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
          return (obj.price * obj.count) + sum
      }, 0)
    },

    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find(obj => obj.id === action.payload);
  
      if (findItem && findItem.count > 1) {
        findItem.count--
      }
    },

    removeItem(state, action) {
      state.items= state.items.filter(obj => obj.id !== action.payload)
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  }
})

const selectBasketState = (state: RootState) => state.basket

export const selectBasketItems = createSelector(selectBasketState, state => state.items)

export const selectBasketTotalPrice = createSelector(selectBasketState, state => state.totalPrice)

export const selectBasketCount = createSelector(selectBasketItems, items => items.reduce((sum: number, item) => sum + item.count, 0))

export const {addItem, removeItem, clearItem, minusItem} = cartSlice.actions

export default cartSlice.reducer;
