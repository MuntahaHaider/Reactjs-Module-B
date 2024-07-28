import { Grid, Typography } from '@mui/material';
import React from 'react';
import image1 from '/src/assets/1img.png'
const Page1 = ({h1,text}) => {
  return (
    <>
      <Grid container spacing={3} sx={{ paddingTop: '100px', width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' } }}>
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
            <h2 style={{
                color:"#006838"
            }}> 
              {h1}
            </h2>
            {text}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img 
            src={image1} 
            alt="Introduction Image"
            style={{ 
              width: '100%', 
              height: 'auto' 
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Page1;
