import React from 'react'

export default function WeatherIcon({icon, wh}) {

    const size = {
        width: `${wh}px`,
        height: `${wh}px`
    }

  return (
    <img src={icon} alt="weatherStatus" style={size} />
  )
}
