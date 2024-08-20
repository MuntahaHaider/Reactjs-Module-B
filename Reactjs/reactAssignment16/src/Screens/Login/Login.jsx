import React from 'react';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
function Login() {
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
         <h5>
         Don't have an account?  <NavLink to='/signup'>Signup</NavLink>
         </h5>    
        </Paper>
     </form> 


{/* <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="mb-3" type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit">
        Login
      </Button>
      <p>Don't have an account?  <NavLink to='/signup'>Signup</NavLink></p>
    </Form>     */}
</>





    
   
  );
}

export default Login;