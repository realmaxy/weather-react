import React from 'react'
import { useSelector } from 'react-redux'
import { glassStyle } from '../../constants';
import HourForecastItem from './HourForecastItem'

export default function HourForecast() {

  const dayList = useSelector(state => state.langToggler.hourForecast) 

  console.log(dayList);
  return (
   <div style={glassStyle} className='w-1/2 h-64 flex'>
    {dayList.map(item => <HourForecastItem key={item.content} title={item.content}/>)}
   </div>
  )
}
