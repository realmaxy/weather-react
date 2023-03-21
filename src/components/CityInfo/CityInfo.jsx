import React from 'react'
import ForecastDay from '../ForecatsCard/ForecastDay'
import HourForecast from '../HourForecast/HourForecast'
import TrackingCities from '../TrackingCities/TrackingCities'
import MainInfo from './MainInfo'

export default function CityInfo() {
  return (
    <>
      <div className=' flex flex-col mt-7' >
        <MainInfo/>
        <HourForecast/>
      </div>
      <div className='flex sm:flex-row flex-col justify-center items-center sm:items-start'>
        <div className='order-2 sm:order-1 w-72 sm:mt-0 mt-3'><TrackingCities/></div>
        <div className='order-1 sm:order-2 w-72 '><ForecastDay/></div>
      </div>
    </>
  )
}
