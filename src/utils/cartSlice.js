import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // one way
      state.items.length = 0; //[]
      // anathore way
      /** return {items:[]}; */
    },
  },
});
export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
