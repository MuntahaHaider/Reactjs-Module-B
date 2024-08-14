import React from 'react'
import style from './Button.module.css'
const Button = ({h6,icon}) => {
  return (
    <>
     <div className='border' style={{margin:50, padding:20  ,boxShadow:'4px 4px 10px rgba(0,0,0.7)',width:'300px',display:'inline-block'}}>
        <h4>{icon} &nbsp;&nbsp;&nbsp; {h6}</h4>
        </div>
    </>
  )
}

export default Button