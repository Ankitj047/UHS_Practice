import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{
        loginuser:[],
        user:[],
        isAuthenticate:false
    },
    
    reducers: {
        loginUserdata(state,action){
            state.loginuser=action.payload
        },
        userfamilydata(state, action){
            state.user = action.payload
        },
        getuserdata(state, action){
state.user = action.payload
        }
    }
})

export default userSlice.reducer;
export const userSliceAction= userSlice.actions;