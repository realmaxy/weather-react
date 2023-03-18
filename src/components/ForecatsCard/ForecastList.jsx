import React from 'react'
import { useSelector } from 'react-redux'
import ForecastCard from './ForecastCard'

export default function ForecastList() {
  
  const tommorow = useSelector(state => state.trackingCities?.activeCity?.weather?.forecastday[1])
  const dayAfterTommorow = useSelector(state => state.trackingCities?.activeCity?.weather?.forecastday[2])

  return (
    <div>
        <ForecastCard/>
        <ForecastCard/>
    </div>
  )
}
