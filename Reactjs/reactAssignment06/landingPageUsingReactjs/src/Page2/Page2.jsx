import React from 'react'
import style from './Page2.module.css'
import Button from '../Button/Button'

function Page2() {
  return (
<div className={style.inlineContainer}>
      <div className={style.textContainer}>
       <ul>
        <li><h5><img  src="https://echooling-react.vercel.app/static/media/1.f0958495fd0e3910630f618ed5b56f77.svg" alt="" /> &nbsp; Do More, Stress Less</h5>
        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Why I say old chap that is spiffing he legged <br />
        it in my flat easy peasy.</p>
        <br />
        <hr />
        </li>
        <li>
            <h5>
                <img src="https://echooling-react.vercel.app/static/media/2.706df48b5d849602a8b526a683ad38e5.svg" alt="" />&nbsp; The Business Intelligence
                </h5>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Why I say old chap that is spiffing he legged <br />
                it in my flat easy peasy.</p>
                <br />
                <hr />
         </li>
        <li>
           <h5>
            <img src="https://echooling-react.vercel.app/static/media/3.cbcad3d0e3ca50b136e675f0b2b45c21.svg" alt="" />
            &nbsp; System Administration
           </h5>
           <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Why I say old chap that is spiffing he legged <br />
           it in my flat easy peasy.</p>
           <br />
           <hr />
        </li>
       </ul>    
      </div>    
      <div className={style.imageContainer}>
        <br /><br />
        <img className={style.image} height={450} width={400} src="./landingPageImages/4.ff3894830e71cdd1965f.png" alt="" />
        <br /><br /><br />
        <Button btn="More about Campus Life " />
      </div>    
    </div>
  )
}

export default Page2