import React from 'react'
import styles from './Navbar.module.css'; // Import the CSS module
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'
import Shop from '../../Icons/shop';
import { colors, Typography } from '@mui/material';
const Navbar = () => {
  return (
    <>
    <div className={styles.fontFamily}>
    <div className={styles.backgrounddiv}>
    <ul className={styles.navbar}
          style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-evenly",
          padding:20,
          color:'white'
          }}>
                <li><NavLink className={styles.navLink} ><img src={logo} alt="" /></NavLink></li>
                <li><NavLink className={styles.navLink}  to='/home'>HOME</NavLink></li>
                <li><NavLink className={styles.navLink} to='/home/allproducts'>ALL PRODUCTS</NavLink></li>
                <li><NavLink className={styles.navLink} to='/home/allproducts/about'>ABOUT US</NavLink></li>
                <li><NavLink className={styles.navLink} > <Shop />  </NavLink></li>
            </ul>
            <div className={styles.backgroundText} >
              <div >
              <h5>Summer Collection</h5>
            <h1>Introducing <br /> New Arrivals</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h4>
            <button style={ {border:'none',borderRadius:30, width:200 , padding:10,marginTop:20}}>
              <NavLink style={{textDecoration:'none'}}>VIEW COLLECTION</NavLink>
            </button>
              </div>
            </div>
    </div>
    </div>
    </>
  )
}

export default Navbar