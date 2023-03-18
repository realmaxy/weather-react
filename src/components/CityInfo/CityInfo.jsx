import React from 'react'
import ForecastList from '../ForecatsCard/ForecastList'
import HourForecast from '../HourForecast/HourForecast'
import MainInfo from './MainInfo'

export default function CityInfo() {
  return (
    <div className=' flex flex-col' >
        <MainInfo/>
        <HourForecast/>
        <ForecastList/>
    </div>
  )
}
