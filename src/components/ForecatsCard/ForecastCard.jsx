import React from 'react'
import { useSelector } from 'react-redux'
import giveDate from '../../helpers/dateFormatter'
import monthFormatter from '../../helpers/montFormatter'
import WeatherIcon from '../CityInfo/WeatherIcon'

export default function ForecastCard({date, day}) {

  const degreeKind = useSelector(state => state.degreeToggler.degreeKind)
  const langNow = useSelector(state => state.langToggler.appLangNow)
  const formatDate = giveDate(date)

  console.log(formatDate)

  return (
    <div className='p-2 flex flex-col items-center'>
      <div className='text-lg font-medium'>{(langNow === 'RU')?formatDate?.dayOfWeek?.RU.long:formatDate?.dayOfWeek?.EN.long}</div>
      <div>{monthFormatter(formatDate.month, langNow)} {formatDate.day}</div>
      <div><WeatherIcon icon={day.condition.icon}/></div>
      <div>{(langNow ==='RU')?'макс: ':'max: '}{(degreeKind === 'C')?`${day.maxtemp_c}°`:`${day.maxtemp_f}`}</div>
      <div>{(langNow ==='RU')?'мин: ':'min: '}{(degreeKind === 'C')?`${day.mintemp_c}°`:`${day.mintemp_f}°`}</div>
    </div>
  )
}