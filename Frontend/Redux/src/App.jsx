import React from 'react'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementBy5, increment, incrementBy5 } from './redux/slices/counterSlice'
import Navbar from './components/Navbar'


const App = () => {

  const num = useSelector((state)=> state.counter.value)

  const dispatch = useDispatch()


  return (
    <div className='main'>
    <Navbar/>
      <h1>{num}</h1>
      <div className='btns'>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(incrementBy5())}}>Increment by 5</button>
      <button onClick={()=>{dispatch(decrementBy5())}}>Decrement by 5</button>

      </div>
    </div>
  )
}

export default App
