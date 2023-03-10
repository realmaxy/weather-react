import Date from './Date'
import Temperature from './Temperature'
import giveDate from '../../helpers/date'

export default function TemperatureAndDate() {

  return (
    <div className='flex flex-col'>
        <Date {...giveDate()}/>
        <Temperature />
    </div>
  )
}
