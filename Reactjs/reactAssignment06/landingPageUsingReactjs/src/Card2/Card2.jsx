import React from 'react'
import style from './Card2.module.css'
import Button from '../Button/Button'
function Card2(three) {
  return (
       <div className={style.card}>
      <div className={style.cardContent}>
        <h2><b>{three.num}</b></h2>
        <p>{three.p}</p>
        <p className={style.time}>{three.time}</p>
        <h6>{three.tit}</h6><br />
        <p><i class="fa-solid fa-location-dot"></i> &nbsp;New York, USA</p><br />
        <Button btn="Find out more"/>
      </div>
    </div>
    
  )
}

export default Card2