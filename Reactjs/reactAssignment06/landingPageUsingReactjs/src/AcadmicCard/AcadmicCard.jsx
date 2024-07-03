import React from 'react'
import style from './AcadmicCard.module.css'
const AcadmicCard =(props) => {
  return (
    <div className={style.card}>
      <div className={style.cardContent}>
        <img src={props.src} alt="" className={style.cardImage} /><br /><br />
        <h2><a href="#"><b>{props.Cardtitle}</b></a></h2>
        <h3><a href="#">Learn more <i className="fa-solid fa-arrow-right"></i></a></h3>
      </div>
    </div>
  )
}
export default AcadmicCard