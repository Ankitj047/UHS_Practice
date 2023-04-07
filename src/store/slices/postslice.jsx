import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice ({
 name: "posts",
 initialState : {
        registeruser:[]
    },

reducers:{
    registerusers(state, action){
        state.registeruser = action.payload
    }
}
})

export default postSlice.reducer
export const postSliceAction = postSlice.actions