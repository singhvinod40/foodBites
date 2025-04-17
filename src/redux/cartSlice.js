import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({ 
    name: 'cart',
    initialState: [],
    reducers:{
        AddItem:(state,action)=>{   
            
        let itemExist = state.find((item) => item.id === action.payload.id)
        if(itemExist){
            state.map((item) => {
                if(item.id === action.payload.id){
                    item.qty += 1;
                }
            })}
        else{
            action.payload.qty = 1;    
            
            state.push(action.payload);
        }
        return state;
    },
    RemoveItem:(state,action)=>{
        return state.filter((item) => item.id !== action.payload);
    },
    ClearCart:(state)=>{
        return [];
    }
}
});


export const {AddItem,RemoveItem,ClearCart} = cartSlice.actions;
export default cartSlice.reducer;