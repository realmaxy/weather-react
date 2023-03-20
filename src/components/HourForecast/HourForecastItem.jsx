import React from 'react'
import HourStatus from './HourStatus'

export default function HourForecastItem({title, forecast}) {
  return (
    <div className='p-5 w-36' >
        <h1 className='font-medium'>{title}</h1>
        <div className='flex justify-between '>
            {forecast && forecast.map(item => <HourStatus key={crypto.randomUUID()} temp_c={item.temp_c} temp_f={item.temp_f} icon={item.condition.icon} time={item.time}/>)}
        </div>
    </div>
  )
}
