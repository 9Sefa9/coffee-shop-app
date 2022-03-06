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
      //Adding item to shopping cart
      let isDuplicateItem = false;

      state.cartContent.forEach((e, i) => {
        if (e.id === action.payload.id) {
          e.quantity += 1;
          isDuplicateItem = true;
          return
        }
      });

      
      if(isDuplicateItem){
        localStorage.setItem("cartContent", JSON.stringify(state.cartContent));
      }else{
        const newCartContent = [...state.cartContent, action.payload];
        state.cartContent = newCartContent;
        localStorage.setItem("cartContent", JSON.stringify(newCartContent));
      }

      //increasing shopping-cart size
      const newCartSize = state.cartSize + 1;
      state.cartSize = newCartSize;
      localStorage.setItem('cartSize', newCartSize);

    },
    showToast: (state, action) => {

    }
  },
});

export const cartContent = (state) => state.cartContent;
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
