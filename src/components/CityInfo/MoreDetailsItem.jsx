import React from 'react'

export default function MoreDetailsItem({text, addition}) {
  return (
    <div className='flex'>
        <h1>{text}:</h1>
        <h1 className='ml-4'>{addition}</h1>
    </div>
  )
}
