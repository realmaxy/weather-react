import s from './PopupSetCity.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWeather, openPopUp} from '../../features/trackingCitiesSlice'
import fetchWeather from '../../api/fetch'

export default function PopupSetCity () {
  
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handlerSubmit = (e) => {
    e.preventDefault()
    fetchWeather(value).then(res => dispatch(addWeather(res)))
    dispatch(openPopUp())
    setValue('')
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
              onChange={(e)=> setValue(e.target.value)}
              />
              <button className={s.button}>Выбрать</button>
          </form>
      </div>
    </>
  ) 
}
