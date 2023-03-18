import React from 'react'
import { useSelector } from 'react-redux'
import monthFormatter from '../../helpers/montFormatter'

export default function Date({month, day, time, dayOfWeek}) {

  const langNow = useSelector(state => state.langToggler.appLangNow)

  return (
    <div className='flex justify-between text-xl'>
        <h1>{monthFormatter(month, langNow)} {day} {(langNow === 'RU')?dayOfWeek?.RU.long:dayOfWeek?.EN.long} {time}</h1>
    </div>
  )
}
