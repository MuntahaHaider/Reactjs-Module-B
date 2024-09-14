import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCounter, incrementCounter } from '../store/slices/counterSlice';

const Button = () => {
    const dispatch = useDispatch();
    const incrementAction = ()=>{
        dispatch(incrementCounter());
    }
    const decrementAction = ()=>{
        dispatch(decrementCounter());
    }
  return (
    <div>
        <button onClick={incrementAction}>Increment</button>
        <button onClick={decrementAction}>Decrement</button>
    </div>
  )
}

export default Button