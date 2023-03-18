import { useSelector } from 'react-redux'
import Date from './Date'
import Temperature from './Temperature'

export default function TemperatureAndDate() {

  const weather = useSelector(state => state.trackingCities?.activeCity?.weather)
  

  return (
    <div className='flex flex-col ml-10 mr-20'>
        <Date {...weather?.location?.localtime}/>
        <Temperature {...weather?.temperature}/>
    </div>
  )
}
