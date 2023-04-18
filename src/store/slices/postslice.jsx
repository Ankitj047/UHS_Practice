import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    registeruser: [],
    loginauthdata: [],
    logindata: [],
    userdata: [],
    subjectdata:[]
  },

  reducers: {
    registerusers(state, action) {
      state.registeruser = action.payload;
    },
    loginauthdata(state, action) {
      state.loginauthdata = action.payload;
    },
    logindata(state,action){
      state.logindata = action.payload;
    },
    userdata(state,action){
      state.userdata = action.payload;
    },
    familydata(state,action){
state.familydata = action.payload
    },
    subjectdata(state,action){
      state.subjectdata = action.payload
    }
  },
});

export default postSlice.reducer;
export const postSliceAction = postSlice.actions;
