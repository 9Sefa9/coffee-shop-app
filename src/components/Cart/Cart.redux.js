import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateName: "initial-cart-rdx",
  cartContent: [],
  cartSize: Number(localStorage.getItem('cartSize'))
};

const cartSlice = createSlice({
  name: "cart-rdx",
  initialState,
  reducers: {

    addItem: (state, action) => {
      const newCartContent = [...state.cartContent, action.payload];
      state.cartContent = newCartContent;
      localStorage.setItem("cartContent", newCartContent);
    },
    removeItem: (state, action) => {

    },
    increaseCartSize: (state, action) => {
      const newCartSize = state.cartSize + action.payload; 
      state.cartSize = newCartSize;
      localStorage.setItem('cartSize', newCartSize);

    }
  },
});

export const cartContent = (state) => state.cartContent;
export const { addItem, removeItem,increaseCartSize } = cartSlice.actions;
export default cartSlice.reducer;
