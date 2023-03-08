import React from 'react'
import GlobalSvgSelector from '../assets/GlobalSvgSelector'
import Toggler from './Toggler'
import {navbarTogglers} from '../constants'
import Search from './Search'

export default function ({logo}) {
  return (
    <div className='flex justify-between items-center py-4'>
        <div className='flex items-center'>
            <GlobalSvgSelector id={logo}/>
            <h1 className='ml-3 text-2xl font-semibold'>WeatherApp</h1>
        </div>
        <Search placeholder='Введите город'/>
        <div className='flex w-32 justify-between'>
            {navbarTogglers.map(item => <Toggler key={item.id} kindOfToggle={item.id} firstButton={item.firstButton} secondButton={item.secondButton}/>)}
        </div>
    </div>
  )
}
