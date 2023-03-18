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
            state.cities.push({
                name: city,
                weather: weatherFormatter(action.payload)
            })
            state.activeCity = ({
                name: city,
                weather: weatherFormatter(action.payload)
            })
        },
        deleteWeather(state, action) {
           state.cities = state.cities.filter((item) => item.name !== action.payload)
           state.activeCity = state.cities[0]
        },
        setActiveCity(state, action) {
            const city = action.payload.location.name
            state.activeCity = ({
                name: city,
                weather: weatherFormatter(action.payload)
            })
        },
        changeActiveCity(state, action) {
            for(let item of state.cities) {
                if (item.name === action.payload) {
                    state.activeCity = item
                }
            }
        }
    },
})

export const {addNewCity, openPopUp, addWeather, deleteWeather, changeActiveCity, setActiveCity} = trackingCitiesSlice.actions

export default trackingCitiesSlice.reducer