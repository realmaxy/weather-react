import React from 'react'
import { glassStyle } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import TrackingCity from './TrackingCity'
import { openPopUp } from '../../features/trackingCitiesSlice'

export default function TrackingCities() {

  const CitiesList = useSelector(state => state.trackingCities.cities)
  const langNow = useSelector(state=> state.langToggler.appLangNow)
  const dispatch = useDispatch()
  
  return (
    <div style={glassStyle} className='flex flex-col sm:w-auto w-72 p-4 mr-3 '>
        {CitiesList.map(item => <TrackingCity key={item.name} name={item.name}/>)}
        <button onClick={() => dispatch(openPopUp())} className='mt-3 bg-blue-700 hover:bg-blue-900 text-white py-1 px-3 rounded' >
        {(langNow === 'RU')?'Добавить город':'Add city'}
        </button>
    </div>
    
  )
}
