import React from 'react'
import { glassStyle } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import TrackingCity from './TrackingCity'
import { openPopUp } from '../../features/trackingCitiesSlice'

export default function TrackingCities() {

  const CitiesList = useSelector(state => state.trackingCities.cities)
  const dispatch = useDispatch()
  
  return (
    <div style={glassStyle} className='w-1/4 flex flex-col items-center p-3'>
        {CitiesList.map(item => <TrackingCity key={item.name} name={item.name}/>)}
        <button onClick={() => dispatch(openPopUp())} className='mt-3 bg-blue-700 hover:bg-blue-900 text-white py-1 px-3 rounded' >Добавить город</button>
    </div>
    
  )
}
