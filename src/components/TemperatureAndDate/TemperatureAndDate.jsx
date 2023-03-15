import { useSelector } from 'react-redux'
import Date from './Date'
import Temperature from './Temperature'

export default function TemperatureAndDate() {

  const date = useSelector(state => state.trackingCities?.activeCity?.weather?.location?.localtime)
  console.log(date)

  return (
    <div className='flex flex-col'>
        <Date />
        <Temperature />
    </div>
  )
}
