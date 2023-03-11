import React from 'react'
import GlobalSvgSelector from '../../assets/GlobalSvgSelector'
import Search from './Search'
import DegreeToggler from './DegreeToggler'
import LangToggler from './LangToggler'
import { useSelector } from 'react-redux'

export default function ({logo}) {

  const searchPlaceholder = useSelector(state => state.langToggler.searchPlaceholder)
  
  return (
    <div className='flex justify-between items-center py-4'>
        <div className='flex items-center'>
            <GlobalSvgSelector id={logo}/>
            <h1 className='ml-3 text-2xl font-semibold'>WeatherApp</h1>
        </div>
        <Search placeholder={searchPlaceholder[0].content}/>
        <div className='flex w-32 justify-between'>
          <DegreeToggler firstButton='C' secondButton='F'/>
          <LangToggler firstButton='RU' secondButton='EN'/>
        </div>
    </div>
  )
}
