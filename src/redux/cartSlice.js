import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        AddItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.push({ ...action.payload, qty: 1 });
            }
        }
        ,
        RemoveItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        increaseItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.qty += 1;
            }
        },
        decreaseItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem && existingItem.qty > 1) {
                existingItem.qty -= 1;
            } else if (existingItem) {
                return state.filter((item) => item.id !== action.payload);
            }
        },
        ClearCart: (state) => {
            return [];
        }
    }
});


export const { AddItem, RemoveItem, ClearCart,increaseItem,decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;