import { createSlice } from "@reduxjs/toolkit";
import { moreDetails, searchPlaceholder, feelsLike, hourForecast, daysOfWeek } from "../constants";
import langFormatter from "../helpers/langFormatter";


const langTogglerSlice = createSlice({
    name: 'langToggler',
    initialState: {
        appLangNow: 'RU',
        moreDetails: langFormatter(moreDetails, 'RU'),
        searchPlaceholder: langFormatter(searchPlaceholder, 'RU'),
        feelsLike: langFormatter(feelsLike, 'RU'),
        hourForecast: langFormatter(hourForecast, 'RU'),
    },
    reducers: {
        toggleLang (state, action) {
            state.moreDetails = langFormatter(moreDetails, action.payload),
            state.appLangNow = action.payload
            state.searchPlaceholder = langFormatter(searchPlaceholder, action.payload)
            state.feelsLike = langFormatter(feelsLike, action.payload)
            state.hourForecast = langFormatter(hourForecast, action.payload)
        }
    }
})

export const {toggleLang} = langTogglerSlice.actions

export default langTogglerSlice.reducer