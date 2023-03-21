import React from 'react'
import { useSelector } from 'react-redux'
import { glassStyle } from '../../constants';
import HourForecastItem from './HourForecastItem'

export default function HourForecast() {

  const dayList = useSelector(state => state.langToggler.hourForecast) 
  const today = useSelector(state => state.trackingCities?.activeCity?.weather?.today)

  const firstBlock = [dayList[0], dayList[1]]
  const secondBlock = [dayList[2], dayList[3]]

  return (
   <div style={glassStyle} className='sm:w-max w-72 m-auto mt-3 mb-3 flex sm:flex-row flex-col'>
      <div className='flex'>{firstBlock.map((item, index) => <HourForecastItem key={index} index={index}title={item.content} forecast={today?.[index]}/>)}</div>
      <div className='flex'>{secondBlock.map((item, index) => <HourForecastItem key={index} index={index}title={item.content} forecast={today?.[index]}/>)}</div>
   </div>
  )
}
