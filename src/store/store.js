import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import postslice from "./slices/postslice";

const store = configureStore({
    reducer: {
        users: userSlice,
        posts: postslice
    }
})

export default store;