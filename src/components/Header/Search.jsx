import {glassStyle} from '../../constants'
import { UilSearch } from '@iconscout/react-unicons'
import { useDispatch } from 'react-redux'
import { changeActiveCity } from '../../features/trackingCitiesSlice'
import { useState } from 'react'

export default function Search({placeholder}) {
  
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(changeActiveCity(value))
  }

  return (
    <form className='w-60 h-10 flex items-center justify-center' style={glassStyle} onSubmit={e => handlerSubmit(e)}>
        <UilSearch color='#3C00B9'/>
        <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} className='focus:outline-none px-3 py-1 placeholder-gray-600 bg-transparent' placeholder={placeholder}/>
    </form>
  )
}
