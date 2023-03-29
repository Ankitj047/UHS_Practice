import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{
        user:[],
        isAuthenticate:false
    },
    reducers: {
        registerUsers(state, action){
            state.user=action.payload
        },
        loginUserdata(state,action){
            state.user=action.payload
        },
        getregisterdata(state,action){
            state.user=action.payload
        },
        userfamilydata(state, action){
            state.user = action.payload
        }
    }
})

// console.log(userSlice.actions);

export default userSlice.reducer;
export const userSliceAction= userSlice.actions;