import React from 'react'
import { glassStyle } from '../../constants'
import MoreDetails from './MoreDetails'
import TemperatureAndDate from '../TemperatureAndDate/TemperatureAndDate'
import WeatherStatusSunriseSunset from './WeatherStatus'


export default function MainInfo() {
  return (
    <div className='flex justify-between max-w-max m-auto items-center p-6' style={glassStyle}>
        <WeatherStatusSunriseSunset/>
        <TemperatureAndDate/>
        <MoreDetails/>
    </div>
  )
}
