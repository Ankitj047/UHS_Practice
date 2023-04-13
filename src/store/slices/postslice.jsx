import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    registeruser: [],
    loginauthdata: [],
    logindata: [],
    userdata: []
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
    }
  },
});

export default postSlice.reducer;
export const postSliceAction = postSlice.actions;
