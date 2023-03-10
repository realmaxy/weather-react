import React from 'react'

export default function Date({month, day, time}) {
  return (
    <div className='flex justify-between text-xl'>
        <h1>{month} {day}</h1>
        <h1>{time}</h1>
    </div>
  )
}
