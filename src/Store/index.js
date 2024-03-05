import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './ui-slice'
import cartSlice from './cart-slice';
const Store = configureStore({
    reducer:{
        ui_slice:uiSlice,
        cart:cartSlice,
    }
})
export default Store;