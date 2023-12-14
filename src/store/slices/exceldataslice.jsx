import { createSlice } from "@reduxjs/toolkit";

const exceldataslice = createSlice({
    name: "exceldata",
    initialState: {
        excelState: []
    },

    reducers:{
        exceldataupdate(state, action){
            state.exceldataupdate = action.payload
        }
    }
})

export default exceldataslice.reducer;
export const exceldatasliceAction = exceldataslice.actions;