import { createSlice } from "@reduxjs/toolkit";
import { weatherFormatter } from "../helpers/weatherFormatter";

const trackingCitiesSlice = createSlice({
    name: 'trackingCities',
    initialState: {
        cities: [],
        popUpIsOpen: true,
        activeCity: null,
        isLoading: null,
        error: null,
    },
    reducers: {
        openPopUp(state) {
            (state.popUpIsOpen)?state.popUpIsOpen = false:state.popUpIsOpen = true
        },
        addWeather(state, action) {
            const city = action.payload.location.name
            console.log(action.payload)
            state.cities.push({
                name: city,
                weather: weatherFormatter(action.payload)
            })
            state.activeCity = ({
                name: city,
                weather: weatherFormatter(action.payload)
            })
        }
    },
})

export const {addNewCity, openPopUp, addWeather} = trackingCitiesSlice.actions

export default trackingCitiesSlice.reducer