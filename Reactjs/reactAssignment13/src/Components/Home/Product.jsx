import React from 'react'
import { productData } from '../data'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import HoverRating from '../Rating/Rating';

const Product = () => {
    const {id} = useParams();
  console.log(id)
  const filterData =  productData.filter((e,i)=>{
    return e.id == id 
  })
  console.log(filterData)
  return (
    <>
    <Navbar/>
<Grid container spacing={3} sx={{ paddingTop: '100px', 
  width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, }}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
      { filterData.map((e, i) =>{
              return(
                <>
                <div style={{maxWidth: 400, height:'auto' ,boxShadow:"4px 4px 15px rgba(0.3 , 0.3 , 0.8)",padding:20 , fontFamily:"revert",marginLeft:50}}>
                <img width="90%" height="400px"  src={e.image} alt="" /><br />
                </div>
                </>
              )
            })
          }
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography component="div" sx={{ 
            paddingRight: { md: 2 }, 
            padding:"20px",
            color:"gray",
            textAlign: {
                xs:"center",
                sm:"center",
                md:"left",
                lg:"left"
            }, }}>
            { filterData.map((e, i) =>{
              return(
                <>
                <h2>{e.title}</h2>
                <h4>{e.description}...</h4>
                <br />
                <HoverRating/>
                </>
              )
            })
          }
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Product