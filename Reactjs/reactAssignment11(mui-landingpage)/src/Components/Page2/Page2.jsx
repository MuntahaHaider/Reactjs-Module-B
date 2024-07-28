import { Grid, Typography } from '@mui/material';
import React from 'react';
import image2 from '/src/assets/2img.png'

const Page2 = ({h2,text1,text2}) => {
  return (
    <>
      <Grid container spacing={3} sx={{ paddingTop: '100px', width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' } }}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
          <img 
            src={image2} 
            alt="Introduction Image"
            style={{ 
              width: '100%', 
              height: 'auto' 
            }}
          />
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
            <h2 style={{
                color:"#006838"
            }}> 
              {h2}
            </h2>
            {text1}<br/><br/>{text2}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Page2;