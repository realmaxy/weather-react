import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = import.meta.env.VITE_REACT_API_KEY 

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: `https://api.weatherapi.com/v1/current.json`}),
    endpoints: (build) => ({
        getWeather: build.query({
            query: (city)=> ({
                url: '',
                params: {
                    key: API_KEY,
                    q: city
                }
            })
        })
    })
})

export const { useGetWeatherQuery } = weatherApi
export const {startFetch} = useGetWeatherQuery