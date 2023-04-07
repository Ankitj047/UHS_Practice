import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    registeruser: [],
    loginauthdata: [],
  },

  reducers: {
    registerusers(state, action) {
      state.registeruser = action.payload;
    },
    loginauthdata(state, action) {
      state.loginauthdata = action.payload;
    },
  },
});

export default postSlice.reducer;
export const postSliceAction = postSlice.actions;
