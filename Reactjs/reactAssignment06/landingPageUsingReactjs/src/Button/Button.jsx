import React from 'react'
import style from './Button.module.css'
function Button(props) {
  return (
    <div>
        <button className={style.btn}>{props.btn} <i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}
export default Button