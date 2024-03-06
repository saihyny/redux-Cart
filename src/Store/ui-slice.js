import { createSlice } from "@reduxjs/toolkit";
import { replaceCart } from "./cart-slice";
import axios from "axios";
const initialState = {
  toggle: false,
  notification:null,
};
const uiSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    isCartOpen: (state) => {
      state.toggle = !state.toggle;
    },
    showNotification: (state,action) => {
       state.notification={
        status:action.payload.status,
        title:action.payload.title,
        message:action.payload.message,
       }
    },
  },
});
export const getThedata = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://auth-cd5cd-default-rtdb.firebaseio.com/data.json"
      );
      const data = response.data;
      dispatch(showNotification({
        status:'success',
        title:'getting data from server was success',
        message:'keep going'
      }))
      dispatch(replaceCart(data));
    } catch (error) {
      dispatch(showNotification({
        status:'error',
        title:'error at getting data from server',
        message:'please try againe'
      }))
    }
  };
};

export default uiSlice.reducer;
export const { isCartOpen,showNotification } = uiSlice.actions;
