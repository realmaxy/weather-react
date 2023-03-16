import React from 'react'
import { useSelector } from 'react-redux'
import WeatherIcon from '../CityInfo/WeatherIcon'

export default function HourStatus({icon, temp_c, temp_f, time}) {

  const degreeKind = useSelector(state => state.degreeToggler.degreeKind) 
  time = time.slice(11)

  return (
    <div className='flex flex-col'>
        <WeatherIcon icon={icon} wh='40'/>
        <div>{(degreeKind === 'C')?temp_c:temp_f}°</div>
        <div>{time}</div>
    </div>
  )
}
