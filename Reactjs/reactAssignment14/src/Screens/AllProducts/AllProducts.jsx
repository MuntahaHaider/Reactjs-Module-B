import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AllCards from '../../Components/AllCards/AllCards'
import Footer from '../../Components/Footer/Footer'
import DropDown from '../../Components/DropDown/DropDown'
import styles from './AllProducts.module.css'
import NewNavbar from '../../Components/NewNavbar/NewNavbar'
const AllProducts = () => {
  return (
    <>
    <NewNavbar />
    <div className={styles.container}>
       <div><h1>All Products</h1></div>
        <div><DropDown /></div>
    </div>
    <AllCards/>
    <Footer/>
        
    </>
  )
}

export default AllProducts