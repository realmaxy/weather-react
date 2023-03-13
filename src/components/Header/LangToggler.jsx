import { useDispatch, useSelector } from 'react-redux'
import { toggleLang } from '../../features/langTogglerSlice'

export default function LangToggler({firstButton, secondButton}) {

  const dispatch = useDispatch()
  const langNow = useSelector(state => state.langToggler.appLangNow)

  const active = {
      fontWeight: '600',
      fontSize: '18px',
      color: 'black'
  }

  const disable = {
      fontWeight: '400',
      fontSize: '14px',
      color: '#4C4B48'
  }


  return (
    <div className='flex items-center'>
        <button 
        style={(langNow === firstButton)?active:disable} 
        className='m-1'
        onClick={()=> dispatch(toggleLang(firstButton))}>
          {firstButton}
        </button>
        <h1 className='-mt-1'>|</h1>
        <button 
        style={(langNow === secondButton)?active:disable} 
        className='m-1'
        onClick={()=> dispatch(toggleLang(secondButton))}>
          {secondButton}
        </button>
    </div>
  )
}
