import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Paper, TextField, Typography } from '@mui/material'
const Signup = () => {
  return (
   <>

<form >
    <Paper  elevation={24} sx={{margin:'auto',marginTop:10,padding:4,width:{
        sm:380,
        md:700,
        lg:700
    }}}>
        <Typography variant="h4">Signup</Typography ><br /><br />
        <TextField
        fullWidth label='Name'/><br /><br />
        <TextField
         fullWidth label='Username'/><br /><br />
        <TextField
         fullWidth label='Email'/><br /><br />
        <TextField
         fullWidth label='Passwrod'/>   <br /><br />
         <Button 
         variant="contained" 
         type="submit"
         sx={{fontSize:15}}>
              Signup
        </Button>
         <h5>
         Already have an account?  <NavLink to='/login'>Login</NavLink>
         </h5>    
        </Paper>
     </form>



    {/* <Form >             
      <Form.Label >Username</Form.Label>
        <Form.Control className="mb-3" type="text" placeholder="Enter Username" />      
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="mb-3"  type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit">
        Signup
      </Button>
      <p>Already have an account?  <NavLink to='/login'>Login</NavLink></p>
    </Form> */}
   </>
  )
}

export default Signup