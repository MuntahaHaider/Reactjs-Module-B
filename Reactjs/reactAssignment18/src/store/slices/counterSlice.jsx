import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterValue : 10,
}
 const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        incrementCounter :(state,action)=>{
          state.counterValue = ++state.counterValue;
        //   console.log('increment')
        },
        decrementCounter :(state,action)=>{
            state.counterValue = --state.counterValue >0 ? --state.counterValue : 0 ;
            // console.log('decrement')
          }
    }

})
const {actions,reducer} = counterSlice ;
export const {incrementCounter,decrementCounter} = actions;
export default reducer;
