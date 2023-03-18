import React from 'react'
import { useSelector } from 'react-redux'

export default function MoreDetailsItem({text, addition, id}) {

  const weather = useSelector(state => state.trackingCities?.activeCity?.weather)

  return (
    <div className='flex'>
        <h1>{text}: {weather?.[id]} {addition}</h1>
    </div>
  )
}
