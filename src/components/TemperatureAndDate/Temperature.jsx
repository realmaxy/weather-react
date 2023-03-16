import React from 'react'
import { useSelector } from 'react-redux'

export default function Temperature({temp_c, temp_f, feelslike_c, feelsLike_f}) {

  const degreeKind = useSelector(state => state.degreeToggler.degreeKind)
  const text = useSelector(state => state.langToggler.feelsLike[0].content)

  return (
    <div className='flex flex-col'>
        <h1 className='text-6xl font-semibold text-blue-200'>{(degreeKind=== 'C')?temp_c:temp_f}°{degreeKind}</h1>
        <h1 className='text-xl font-light '>{text}{(degreeKind=== 'C')?feelslike_c:feelsLike_f}°{degreeKind}</h1>
    </div>
  )
}
