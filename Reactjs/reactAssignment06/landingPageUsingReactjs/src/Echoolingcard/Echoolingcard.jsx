import React from 'react'
import style from './Echoolingcard.module.css'
function Echoolingcard(four) {
  return (
    <div className={style.card}>
    <div className={style.cardContent}>
      <img src={four.src} alt="" className={style.cardImage} /><br /><br />
     <p style={{color:'#D2093C'}}>Education</p>
      <h5><a href="#">{four.titlee}</a></h5><hr />
      <p> <i class="fa-solid fa-users"></i>&nbsp; Charlie Doyle</p>
    </div>
  </div>
  )
}

export default Echoolingcard