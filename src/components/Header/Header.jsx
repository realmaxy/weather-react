import React from 'react'
import GlobalSvgSelector from '../../assets/GlobalSvgSelector'
import Toggler from './DegreeToggler'
import {navbarTogglers} from '../../constants'
import Search from './Search'
import DegreeToggler from './DegreeToggler'
import LangToggler from './LangToggler'

export default function ({logo}) {
  return (
    <div className='flex justify-between items-center py-4'>
        <div className='flex items-center'>
            <GlobalSvgSelector id={logo}/>
            <h1 className='ml-3 text-2xl font-semibold'>WeatherApp</h1>
        </div>
        <Search placeholder='Введите город'/>
        <div className='flex w-32 justify-between'>
          <DegreeToggler firstButton='C' secondButton='F'/>
          <LangToggler firstButton='RU' secondButton='EN'/>
        </div>
    </div>
  )
}
