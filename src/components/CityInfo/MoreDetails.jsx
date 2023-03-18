import React from 'react'
import { useSelector } from 'react-redux'
import MoreDetailsItem from './MoreDetailsItem'

export default function MoreDetails() {

  const detailsList = useSelector(state => state.langToggler.moreDetails)

  return (
    <div className='flex flex-col min-w-30'>
      {detailsList.map(item => 
        <MoreDetailsItem key={item.id} text={item.content.text} addition={item.content.additional} id={item.id}/>
      )}
    </div>
  )
}


