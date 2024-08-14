import React from 'react'
import styles from './NewNavbar.module.css'; 
import { NavLink } from 'react-router-dom';
import Shop from '../../Icons/shop';
import logo from '../../assets/Images/logo.png'

const NewNavbar = () => {
  return (
    <>
    <div  className={styles.fontFamily}>
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
    </div>
    </div>
    </>
  )
}

export default NewNavbar