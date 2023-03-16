import React from 'react'
import { useSelector } from 'react-redux'
import WeatherIcon from './WeatherIcon'

export default function WeatherStatus({status, icon}) {

  const weather = useSelector(state => state.trackingCities?.activeCity?.weather)

  return (
    <div>
        <WeatherIcon icon={weather?.icon}/>
        <h1>{weather?.weatherStatus}</h1>
    </div>
  )
}
