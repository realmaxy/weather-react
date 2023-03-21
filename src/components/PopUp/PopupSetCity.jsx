import s from './PopupSetCity.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWeather, openPopUp} from '../../features/trackingCitiesSlice'
import fetchWeather from '../../api/fetch'
import { isNumeric } from '../../helpers/isNuneric'

export default function PopupSetCity () {
  
  const citiesList = useSelector(state => state.trackingCities.cities)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [err, setErr] = useState(false)

  const handlerSubmit = (e) => {
    for(let city of citiesList) {
      if (city.name === value) {
        dispatch(openPopUp())
        return
      }
    }
    e.preventDefault()
    if(value === '') {
      setErr(true)
    }
    else if(isNumeric(value)) {
      setErr(true)
    }
    else if(value !== ''){
      setErr(false)
      fetchWeather(value).then(res => dispatch(addWeather(res)))
      dispatch(openPopUp())
      setValue('')
    }
  }
  
  return(
    <>
      <div className='w-screen h-screen bg-gradient-to-tl from-pink-400 to-indigo-500 absolute z-30'/>
      <div className={s.popup}>
          <form className={s.form} onSubmit={handlerSubmit}>
              <h1 className={s.title}>Введите свой город</h1>
              <input 
              value={value}
              type='text' 
              className={s.input}
              onChange={(e)=> {setValue(e.target.value)}}
              />
              {err && <h1 className='text-xs font-medium text-red-500 mt-1'>Ошибка: введите название города</h1>}
              <button className={s.button}>Выбрать</button>
          </form>
      </div>
    </>
  ) 
}
