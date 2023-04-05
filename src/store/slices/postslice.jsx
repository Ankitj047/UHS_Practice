import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice ({
 name: "users",
 initialState : {
        registeruser:[]
    },

reducers:{
    registerusers(state, action){
        state.registeruser = action.payload
    }
}
})

console.log(postSlice.actions)
export default postSlice.reducer
export const postSliceAction = postSlice.actions