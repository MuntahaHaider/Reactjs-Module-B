import React from 'react'
import Cards from '../Cards/Cards'
import { productData } from '../data'
import Navbar from '../Navbar/Navbar'
const Home = () => {
  
  return (
    <>
    <Navbar/><br /><br />
    <h1 style={{textAlign:"center"}}>All Products</h1>
    {
       productData.map((e,i)=>{
            return (
                <div style={{display:"inline-block" , margin:"30px"}}>
                   <Cards image={e.image} title={e.title} desc={e.description} id={e.id} key={i}/>
                </div>
            )
        })
    }
    </>
  )
}

export default Home