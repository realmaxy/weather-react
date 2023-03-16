import React from 'react'

export default function HourStatus({icon, temp_c, temp_f, time}) {
  return (
    <div className='flex flex-col '>
        <div>{icon}</div>
        <div>{temp_c}</div>
        <div>{time}</div>
    </div>
  )
}
