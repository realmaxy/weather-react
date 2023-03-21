import React from 'react'
import { glassStyle } from '../../constants'
import MoreDetails from './MoreDetails'
import TemperatureAndDate from '../TemperatureAndDate/TemperatureAndDate'
import WeatherStatusSunriseSunset from './WeatherStatus'


export default function MainInfo() {
  return (
    <div className='sm:w-auto w-72 m-auto p-3 flex flex-col items-center sm:flex-row' style={glassStyle}>
        <div className='sm:oreder-1 order-2'><WeatherStatusSunriseSunset /></div>
        <div className='sm:order-2 order-1 '><TemperatureAndDate /></div>
        <div className='sm:order-3 order-3'><MoreDetails/></div>
    </div>
  )
}
