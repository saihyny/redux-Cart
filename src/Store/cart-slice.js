import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart:(state,action)=>{
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity= action.payload.totalQuantity;
      action.payload.items===undefined ?
      state.items=[]:
      state.items=action.payload.items 

    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
        state.totalAmount += Number(newItem.price);
        state.totalQuantity++
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalAmount += Number(newItem.price);
        state.totalQuantity ++;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      console.log(action.payload);
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (state.items[index].quantity === 1) {
          state.totalAmount -= Number(state.items[index].totalPrice);
          state.totalQuantity --;
          state.items.splice(index, 1);
        } else {
          state.items[index].quantity--;
          state.items[index].totalPrice -= state.items[index].price;
          state.totalAmount -= Number(state.items[index].totalPrice);
          state.totalQuantity --;
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart,replaceCart } = cartSlice.actions;
