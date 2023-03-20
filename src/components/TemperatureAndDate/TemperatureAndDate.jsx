import { useSelector } from 'react-redux'
import Date from './Date'
import Temperature from './Temperature'

export default function TemperatureAndDate() {

  const weather = useSelector(state => state.trackingCities?.activeCity?.weather)
  

  return (
    <div className='flex flex-col md:ml-4 sm:mr-5 items-center'>
        <Date {...weather?.location?.localtime}/>
        <Temperature {...weather?.temperature}/>
    </div>
  )
}
