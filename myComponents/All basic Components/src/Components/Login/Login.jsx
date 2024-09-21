import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Paper, TextField, Typography } from '@mui/material'
const Login = () => {
  return (
    <>
    
<form >
    <Paper  elevation={24} sx={{margin:'auto',marginTop:10,padding:4,width:{
        sm:380,
        md:700,
        lg:700
    }}}>
        <Typography variant="h4">Login</Typography ><br /><br />
        <TextField
         fullWidth label='Email'/><br /><br />
        <TextField
         fullWidth label='password'/>   <br /><br />
         <Button 
         variant="contained" 
         type="submit"
         sx={{fontSize:15}}>
              Login
        </Button>
        <br /><br />
         <h5>
         Don't have an account?  <NavLink to='/signup'>Signup</NavLink>
         </h5>    
        </Paper>
     </form> 

    </>
  )
}

export default Login