import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cart'
const Store = configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default Store;