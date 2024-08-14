import React, { useEffect, useState } from 'react'
import styles from './home.module.css'; // Import the CSS module
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'
import Shop from '../../Icons/shop';
import { colors, Typography } from '@mui/material';
import Navbar from '../../Components/Navbar/Navbar';
import Section1 from '../../Components/Section1/Section1';
import Cards from '../../Components/Cards/Cards';
import axios from 'axios';
import AllCards from '../../Components/AllCards/AllCards';
import Button from '../../Components/Button/Button';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import PinDropSharpIcon from '@mui/icons-material/PinDropSharp';
import DiscountSharpIcon from '@mui/icons-material/DiscountSharp';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
   
  return (
    <>
    <div className={styles.fontFamily}>
      <Navbar />
      <Section1/>
      <AllCards h1='Featured Products'/>
      <div >
        <Button icon={<LocalShippingSharpIcon fontSize='50px'/>} h6='Express Delivery'/>
        <Button icon={<PinDropSharpIcon/>} h6='Order Tracking'/>
        <Button icon={<DiscountSharpIcon/>} h6='Regular Discounts'/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home