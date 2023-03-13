import { createSlice } from "@reduxjs/toolkit";

const degreeTogglerSlice = createSlice({
    name: 'degreeToggler',
    initialState: {
        degreeKind: 'C',
    },
    reducers: {
        toggleDegree(state, action) {
            state.degreeKind = action.payload
        }
    },
})

export const {toggleDegree} = degreeTogglerSlice.actions;

export default degreeTogglerSlice.reducer