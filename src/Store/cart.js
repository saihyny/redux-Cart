import {createSlice} from '@reduxjs/toolkit'
const initialState={
    toggle:false,
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       isCartOpen:(state)=>{
         state.toggle=!state.toggle
       }
    }
})
export default cartSlice.reducer;
export const {isCartOpen}=cartSlice.actions;