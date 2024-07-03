import React from 'react'
import style from './Carosil.module.css'
import Button from '../Button/Button'

function Carosil() {
  return (
<div className={style.main}>
      <div className={style.cont}>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img id='img' src="./landingPageImages/1.ddb463a076b58bbe0ea3.jpg" className="d-block w-100" alt="..."/>
              <div id="caroContent" className={`carousel-caption ${style.carouselCaption}`}>
                <h1><b>Discover the world of <br /> possible university. </b></h1>
                <button className={style.blurButton}>Click Me</button>
              </div>
            </div>
            <div className="carousel-item">
              <img id='img' src="./landingPageImages/2.924b429a0601a89b04e1.jpg" className="d-block w-100" alt="..."/>
              <div id="caroContent" className={`carousel-caption d-none d-md-block ${style.carouselCaption}`}>
                <h1><b>Discover the world of <br /> possible university. </b></h1>
                <button className={style.blurButton}>Click Me</button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div> 
  )
}

export default Carosil


