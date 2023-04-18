import { createSlice } from "@reduxjs/toolkit";

const diseaseSlice = createSlice({
    name:"disease",
    initialState : {
        diseasedata:[]
    },

    reducers:{
        diseasedata(state,action){
state.diseasedata = action.payload
        }
    }
})

export default diseaseSlice.reducer;
export const diseaseSliceAction = diseaseSlice.actions;