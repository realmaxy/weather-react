import React from 'react'
import { glassStyle } from '../../constants'
import MoreDetails from './MoreDetails'
import TemperatureAndDate from '../TemperatureAndDate/TemperatureAndDate'
import WeatherStatusSunriseSunset from './WeatherStatusSunriseSunset'


export default function MainInfo() {
  return (
    <div className='flex justify-between items-center h-64 w-1/2 mt-10' style={glassStyle}>
        <WeatherStatusSunriseSunset/>
        <TemperatureAndDate/>
        <MoreDetails/>
    </div>
  )
}
