import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateName: "init",
  cartContent: []
};

const cartSlice = createSlice({
  name: "cart-rdx",
  initialState,
  reducers: {
    
    addItem: (state,action) => {
       const newCartContent = [...state.cartContent,action.payload];
       state.cartContent = newCartContent;
       localStorage.setItem("cartContent",newCartContent);
       
    },
    removeItem: (state,action)=>{
   
    }
  },
});
export const cartContent = (state) => state.cartContent;
export const { addItem,removeItem } = cartSlice.actions;
export default cartSlice.reducer;
