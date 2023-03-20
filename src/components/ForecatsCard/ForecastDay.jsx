import React from 'react'
import { useSelector } from 'react-redux'
import { glassStyle } from '../../constants';
import ForecastCard from './ForecastCard';

export default function ForecastDay() {
  const forecast = useSelector(state => state.trackingCities?.activeCity?.weather?.forecastday)

  return (
    <div className='flex items-center p-4 justify-around' style={glassStyle}>
        {forecast && forecast.map((item, index)=> {if(index !== 0){return <ForecastCard key={index} {...item}/>}})}
    </div>
  )
}
