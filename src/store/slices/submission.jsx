import { createSlice } from "@reduxjs/toolkit";

const SubmissionSlice = createSlice({
    name: "submission",
    initialState: {
        submitssionState: []
    },

    reducers:{
        finalSubmission(state,action){
            state.finalSubmission = action.payload
        }
    }
})

export default SubmissionSlice.reducer;
export const SubmissionSliceAction = SubmissionSlice.actions;