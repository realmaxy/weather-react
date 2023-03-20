import React from 'react'
import { useSelector } from 'react-redux'
import monthFormatter from '../../helpers/montFormatter'

export default function Date({month, day, time, dayOfWeek}) {

  const langNow = useSelector(state => state.langToggler.appLangNow)

  return (
    <div className='flex justify-between text-xl w-max md:flex-row flex-col items-center'>
      <div className='flex'>
        <h1>{monthFormatter(month, langNow)}</h1>
        <h1 className='pl-2'>{day}</h1>
      </div>
      <div className='flex'>
        <h1 className='pl-2 pr-2'>{(langNow === 'RU')?dayOfWeek?.RU.long:dayOfWeek?.EN.long}</h1>
        <h1>{time}</h1>
      </div>
    </div>
  )
}
