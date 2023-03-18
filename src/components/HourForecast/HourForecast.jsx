import React from 'react'
import { useSelector } from 'react-redux'
import { glassStyle } from '../../constants';
import HourForecastItem from './HourForecastItem'

export default function HourForecast() {

  const dayList = useSelector(state => state.langToggler.hourForecast) 
  const today = useSelector(state => state.trackingCities?.activeCity?.weather?.today)

  return (
   <div style={glassStyle} className='flex max-w-max m-auto mt-3 mb-3'>
    {dayList.map((item, index) => <HourForecastItem key={index} title={item.content} forecast={today?.[index]}/>)}
   </div>
  )
}
