import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const NewUser = () => {
    const [newUser,setNewuser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',

    })
const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/users',newUser)
    .then((response) => alert("user create successfully"))
      .catch((error) => console.log(error));
      console.log(newUser)
}
console.log(newUser)
  return (
    <form onSubmit={handleSubmit}>
    <Paper  elevation={24} sx={{margin:'auto',marginTop:10,padding:4,width:{
        sm:380,
        md:700,
        lg:700
    }}}>
        <Typography variant="h4">Create user</Typography ><br /><br />
        <TextField
        onChange={(e)=>setNewuser({...newUser,name:e.target.value})} fullWidth label='Name'/><br /><br />
        <TextField
        onChange={(e)=>setNewuser({...newUser,username:e.target.value})} fullWidth label='Username'/><br /><br />
        <TextField
        onChange={(e)=>setNewuser({...newUser,email:e.target.value})} fullWidth label='Email'/><br /><br />
        <TextField
        onChange={(e)=>setNewuser({...newUser,phone:e.target.value})} fullWidth label='Phone'/>   <br /><br />
        <Button 
         variant="contained" 
         type="submit"
         sx={{fontSize:15}}>
              create
        </Button>
        </Paper>
     </form> 
  )
}

export default NewUser