import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'

const AllCards = ({h1}) => {
    const [productData,setproductData] = useState([])
   useEffect(()=>{
    getApiData()
   },[])
   const getApiData = async ()=>{
    const fetchData = await axios.get('https://fakestoreapi.com/products')
    setproductData(fetchData.data)
    console.log(fetchData.data)
   }
  console.log(productData)
  return (
      <>
      <div style={{textAlign:'center',marginTop:50,marginBottom:50}} className='container-fluid'>
        <h1>{h1}</h1><br /><br />
      {
       productData.map((e,i)=>{
        return(
          <div style={{display:'inline-block'}} key={i}>
            <Cards id={e.id}
              categary={e.category}
              title={e.title}
              image={e.image}
              desc={e.description}
              price={e.price}
              
              />
          </div>
        )
       })
      }
      </div>
      </>
  )
}

export default AllCards