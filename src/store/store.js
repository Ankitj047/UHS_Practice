import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import postslice from "./slices/postslice";
import diseaseslice from "./slices/diseaseslice";
import SubmissionSlice from "./slices/submission";
import exceldataslice from "./slices/exceldataslice";

const store = configureStore({
    reducer: {
        users: userSlice,
        posts: postslice,
        disease: diseaseslice,
        submission: SubmissionSlice,
        exceldata: exceldataslice
    }
})

export default store;