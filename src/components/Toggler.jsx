import React, { useState } from 'react'

export default function Toggler({kindOfToggle, firstButton, secondButton}) {

    const active = {
        fontWeight: '600',
        fontSize: '14px',
        color: 'black'
    }

    const disable = {
        fontWeight: '400',
        fontSize: '14px',
        color: '#4C4B48'
    }

    const [status, setStatus] = useState(disable)

  return (
    <div className='flex items-center'>
        <button style={status} className='m-1'>{firstButton}</button>
        <h1 className='-mt-1'>|</h1>
        <button style={status} className='m-1'>{secondButton}</button>
    </div>
  )
}
