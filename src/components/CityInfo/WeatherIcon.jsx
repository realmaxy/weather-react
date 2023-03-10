import React from 'react'

export default function WeatherIcon(icon) {
    const size = {
        width: '80px',
        height: '80px'
    }

  return (
    <img src={icon} alt="weatherStatus" style={size} />
  )
}
