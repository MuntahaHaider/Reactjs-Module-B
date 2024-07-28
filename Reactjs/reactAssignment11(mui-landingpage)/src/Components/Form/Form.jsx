import { Box } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';

import Input from '../Input/Input'
const Form = () => {
  return (
    <>
    <Box sx={{
        width:{
            sm:400,
            md:400,
            lg:500,
        },
        height:"450px",
        margin:'auto',
        padding:"10px",
        marginTop:"50px",
        marginBottom:"50px",
        border:"1px solid black",
        boxShadow:"2px 2px 5px rgba(0,0,0.5)"
    }}>
   <Box sx={{textAlign:"center"}}>
   <h1>Contact</h1>
   <Input  label='Name'/>
   <Input label='Email'/>
   <Input label='Phone Number'/>
   <Input label='Message'/>
   <Button
      sx={{
        width: '70%',
        marginTop: 5,
        backgroundColor: '#006838',
        color: 'white',
        '&:hover': {
          backgroundColor: 'white', 
          color: 'black', 
        },
      }}
    >
      Submit
    </Button>   
    </Box>
    </Box>
    </>
  )
}

export default Form