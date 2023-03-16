import React from 'react'
import HourForecast from '../HourForecast/HourForecast'
import MainInfo from './MainInfo'

export default function CityInfo() {
  return (
    <div className=' flex items-center justify-between ' >
        <MainInfo/>
        <HourForecast/>
    </div>
  )
}
