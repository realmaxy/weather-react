import React from 'react'
import { useSelector } from 'react-redux'
import WeatherIcon from './WeatherIcon'

export default function WeatherStatus() {

  const weather = useSelector(state => state.trackingCities?.activeCity?.weather)

  return (
    <div className='flex items-center flex-col'>
        <WeatherIcon icon={weather?.icon} wh='80'/>
    </div>
  )
}
