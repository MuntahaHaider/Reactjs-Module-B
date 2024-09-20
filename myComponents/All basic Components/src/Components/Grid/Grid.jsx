import React from 'react'
import { Grid, Typography } from '@mui/material';

const Grid = () => {
  return (
    <>
    <Grid container spacing={3} sx={{ paddingTop: '100px', width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' } }}>

        <Grid item xs={12} sm={12} md={6} lg={6}>

          <Typography 
            component="div" sx={{ 
            paddingRight: { md: 2 }, 
            padding:"20px",
            color:"gray",
            textAlign: {
                xs:"center",
                sm:"center",
                md:"left",
                lg:"left"  }, }}
                >
            <h2 style={{ color:"black"  }}>heading</h2>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum iste expedita voluptatibus animi quo sequi, voluptate ratione optio possimus beatae totam inventore commodi quis voluptatem consequatur dolores? Beatae, doloremque sint.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img  src={image1} alt="Introduction Image" style={{  width: '100%', height: 'auto' }}/>
        </Grid>
      </Grid>
    </>
  )
}

export default Grid