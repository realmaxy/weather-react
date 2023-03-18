import React from 'react'
import WeatherIcon from '../CityInfo/WeatherIcon'
import Date from '../TemperatureAndDate/Date'

export default function ForecastCard({temp_c, temp_f, date, icon}) {

  
  return (
    <div className='flex flex-col'>
        <Date />
        <WeatherIcon icon={icon}/>
    </div>
  )
}
