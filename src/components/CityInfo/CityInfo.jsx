import React from 'react'
import ForecastDay from '../ForecatsCard/ForecastDay'
import HourForecast from '../HourForecast/HourForecast'
import TrackingCities from '../TrackingCities/TrackingCities'
import MainInfo from './MainInfo'

export default function CityInfo() {
  return (
    <>
      <div className=' flex flex-col' >
        <MainInfo/>
        <HourForecast/>
      </div>
      <div className='flex justify-center'>
        <TrackingCities/>
        <ForecastDay/>
      </div>
    </>
  )
}
