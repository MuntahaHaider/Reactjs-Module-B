import React from 'react'
import style from './TransperentCard.module.css'
const TransperentCard = ({image}) => {
  return (
    <div className={style.background}>
      <img src={image} alt="Background" />
      <div className={style.text}>
        <h3>Stella Jones</h3>
        <p>Super Model</p>
      </div>
    </div>
  )
}

export default TransperentCard