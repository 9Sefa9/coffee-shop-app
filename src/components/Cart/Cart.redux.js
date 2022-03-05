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
      let isDuplicateItem = false;

      state.cartContent.forEach((e, i) => {
        if (e.img === action.payload.img) {
          //@TODO not working.
          e.quantity = 1;
          isDuplicateItem = true;
          console.log("quantity! ");
          return;
        }
      });

      /*if (isDuplicateItem) {
        if(originalItem.quantity === 'undefined'){
          originalItem.quantity = 0;
        }else{
          originalItem.quantity += 1;
        }
      }*/
      if (!isDuplicateItem) {
        console.log("not duplicated");
        const newCartContent = [...state.cartContent, action.payload];
        state.cartContent = newCartContent;
        localStorage.setItem("cartContent", JSON.stringify(newCartContent));
      }

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
export const { addItem, removeItem, increaseCartSize } = cartSlice.actions;
export default cartSlice.reducer;
