import React from 'react'
import { useSelector } from 'react-redux'

export default function Temperature({tempC, tempF, feelsLike}) {

  const degreeKind = useSelector(state => state.degreeToggler.degreeKind)
  const text = useSelector(state => state.langToggler.feelsLike[0].content)

  return (
    <div className='flex flex-col'>
        <h1 className='text-6xl font-semibold text-blue-200'>+{(degreeKind=== 'C')?tempC:tempF}°{degreeKind}</h1>
        <h1 className='text-xl font-light '>{text}{feelsLike}°{degreeKind}</h1>
    </div>
  )
}
