import { styled } from '@mui/material'
import  Styles  from './Section1.module.css'
import React from 'react'
import comma from '../../assets/Images/comma.png'
const Section1 = () => {
  return (
    <>
    <div className={Styles.Section1}>
        <img width={30} src={comma} alt="" /><br /><br />
         <h1>Shopping is cheaper than therapy.</h1><br />
        <h3><span><hr style={{width:250,color:"black"}}/></span>OnlineWardrobe</h3>
    </div>
    <div style={{width:'100%'}}>
            <div className={Styles.hr}></div>
    </div>
    </>
  )
}

export default Section1