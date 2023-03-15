import React from 'react'
import { glassStyle } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import TrackingCity from './TrackingCity'
import { openPopUp } from '../../features/trackingCitiesSlice'

export default function TrackingCities() {

  const CitiesList = useSelector(state => state.trackingCities.cities)
  const dispatch = useDispatch()
  
  return (
    <div style={glassStyle} className='w-1/3 flex flex-col'>
        {CitiesList.map(item => <TrackingCity key={item.name} name={item.name}/>)}
        <button onClick={() => dispatch(openPopUp())}>Добавить город</button>
    </div>
    
  )
}
