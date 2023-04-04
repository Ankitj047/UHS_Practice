import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{
        registeruser: [],
        loginuser:[],
        user:[],
        isAuthenticate:false
    },
    
    reducers: {
        registerUsers(state, action){
            state.registeruser=action.payload
// to print the store data            console.log(action.payload); 
   // to pring   the store data      console.log(state.registeruser);
        },
        loginUserdata(state,action){
            state.loginuser=action.payload
        },
        getregisterdata(state,action){
            state.user=action.payload
        },
        userfamilydata(state, action){
            state.user = action.payload
        },
        getuserdata(state, action){
state.user = action.payload
        }
    }
})

console.log(userSlice.actions);

export default userSlice.reducer;
export const userSliceAction= userSlice.actions;