import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function LangToggler({firstButton, secondButton}) {

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
        style={disable} 
        className='m-1'>
          {firstButton}
        </button>
        <h1 className='-mt-1'>|</h1>
        <button 
        style={disable} 
        className='m-1'>
          {secondButton}
        </button>
    </div>
  )
}
