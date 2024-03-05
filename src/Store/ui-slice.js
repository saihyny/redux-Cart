import {createSlice} from '@reduxjs/toolkit'
const initialState={
    toggle:false,
}
const uiSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       isCartOpen:(state)=>{
         state.toggle=!state.toggle
       }
    }
})
export default uiSlice.reducer;
export const {isCartOpen}=uiSlice.actions;