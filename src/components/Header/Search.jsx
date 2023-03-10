import { useState } from 'react'
import {glassStyle} from '../../constants'
import { UilSearch } from '@iconscout/react-unicons'

export default function Search({placeholder}) {
    const [value, setValue] = useState('')


  return (
    <form className='w-60 h-10 flex items-center justify-center' style={glassStyle}>
        <UilSearch color='#3C00B9'/>
        <input type="text" className='focus:outline-none px-3 py-1 placeholder-gray-600 bg-transparent' placeholder={placeholder}/>
    </form>

  )
}
