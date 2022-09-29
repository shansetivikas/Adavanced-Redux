import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:0, 
    showCounter:true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) { 
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increaseby5(state, action){
            state.counter = state.counter+action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})

export default counterSlice;