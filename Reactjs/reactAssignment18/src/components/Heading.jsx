import React from 'react'
import { useSelector } from 'react-redux'

const Heading = () => {
    const {counterValue} = useSelector((state)=>state.counterReducer)
    // console.log('counter',counterValue)
  return (
    <div>
        <h1>Welcome Redux Toolkit</h1>
        <h3>CouterValue : {counterValue}</h3>
    </div>
  )
}

export default Heading