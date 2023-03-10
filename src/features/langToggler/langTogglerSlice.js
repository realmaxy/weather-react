import { createSlice } from "@reduxjs/toolkit";
import { moreDetails } from "../../constants";
import langFormatter from "../../helpers/langFormatter";


const langTollerSlice = createSlice({
    name: 'langToggler',
    initialState: {
        appLangNow: 'RU',
        moreDetails: langFormatter(moreDetails, 'RU'),
    },
    reducers: {
        toggleLang (state, action) {
            state.moreDetails = langFormatter(moreDetails, action.payload),
            state.appLangNow = action.payload
        }
    }
})

export const {toggleLang} = langTollerSlice.actions

export default langTollerSlice.reducer