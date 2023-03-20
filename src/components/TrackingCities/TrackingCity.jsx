import React from 'react'
import { UilTimes } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveCity, deleteWeather } from '../../features/trackingCitiesSlice'

export default function TrackingCity({name}) {

  const dispatch = useDispatch()
  const citiesList = useSelector(state => state.trackingCities?.cities) 

  return (
    <div className='flex  justify-center w-full '>
        <h1 className='text-lg cursor-pointer' onClick={() => dispatch(changeActiveCity(name))}>{name}</h1>
        {citiesList.length !== 1 && 
        <button className='ml-auto' onClick={() => dispatch(deleteWeather(name))}>
          <UilTimes color='#0C355A' size='30px'/>
        </button>}
    </div>
  )
}
