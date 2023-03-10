import { useDispatch } from 'react-redux'
import { toggleDegree } from '../features/degreeToggler/degreeTogglerSlice'
import { useSelector } from 'react-redux'

export default function DegreeToggler({ firstButton, secondButton}) {

  const dispatch = useDispatch()

    const active = {
        fontWeight: '600',
        fontSize: '14px',
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
        className='m-1' 
        onClick={
          ()=>dispatch(toggleDegree(firstButton))}>
          {firstButton}
        </button>
        <h1 className='-mt-1'>|</h1>
        <button 
        style={disable} 
        className='m-1'
        onClick={()=>dispatch(toggleDegree(secondButton))}
        >
          {secondButton}
        </button>
    </div>
  )
}
