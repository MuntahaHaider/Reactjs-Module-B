import { Typography } from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'
import profile from '/src/assets/aliMughal.jpg'

const Profile = ({h2,p,text}) => {
  return (
    <>
    <Box  sx={{textAlign:"center"}}>
    <img style={{borderRadius:"50%",width:"250px",marginTop:"100px",marginBottom:"20px"}} 
    src={profile} alt="" />
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
<div style={{fontSize:"30px",textAlign:"center"}}>
<h2 >{h2}<br/><p style={{fontSize:"20px"}}>{p}</p></h2>
   <Typography>
   We aim to be most efficient provider of business process outsourcing services <br /> by setting the industry standards for cost and quality of services. Our long <br /> term success will be driven by our relentless focus on recruiting and <br /> developing the most talented pool of human capital in our industry.
   </Typography>
</div>
    </Typography>
    </Box>
    </>
  )
}

export default Profile