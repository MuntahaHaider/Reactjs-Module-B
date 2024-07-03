import React from 'react'
import style from './Courses.module.css'
const Courses =(two)=> {
  return (
   <div className={style.card}>
      <div className={style.cardContent}>
        <img src={two.src} alt="" className={style.cardImage} /><br /><br />
        <p> <i style={{color:"red",}}>. UX Design</i>  &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; . 5 Lessons</p>
        <h5><a href="#">Dave conservatoire is the Entirely free online</a></h5><hr />
        <p> <i class="fa-solid fa-users"></i> 56 Students &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; <b style={{color:"red",}}> $72.00</b></p>
      </div>
    </div>
  )
}

export default Courses