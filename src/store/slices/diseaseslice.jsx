import { createSlice } from "@reduxjs/toolkit";

const diseaseSlice = createSlice({
    name:"disease",
    initialState : {
        diseasedata:[],
        userDiseaseData:[]
    },

    reducers:{
        diseasedata(state,action){
state.diseasedata = action.payload
        },
        userDiseaseData(state,action){
            state.userDiseaseData = action.payload
        }
    }
})

export default diseaseSlice.reducer;
export const diseaseSliceAction = diseaseSlice.actions;