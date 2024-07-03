import React from 'react'
import style from './Page.module.css'
import Button from '../Button/Button'
// import Button from './Button';
function Page() {
  return (
    <div className={style.inlineContainer}>
      <div className={style.imageContainer}>
        <img className={style.image} height={600} width={550} src="./landingPageImages/ab.fcda2469b98ffc37a148.png" alt="" />
      </div>

      <div className={style.textContainer}>
        <h1>Welcome to <br />
        Echooling LMS <br />
        Platform</h1><br />
        <h6>Education is both the act of teaching knowledge to others and <br />
         the act of receiving knowledge from someone else. <br />
         Have questions? 
         <a href="#"> Get Free Guide</a></h6><br /><br /><hr /><br />
         <p>Education also refers to the knowledge received through schooling instruction <br />
         and to the institution of teaching as a whole. The main purpose of education <br />
         is the integral development of a person.</p>
         <Button btn="Read more " />
      </div>
    </div>
  )
}

export default Page