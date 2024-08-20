import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const {id} = useParams()
    console.log(id)
    const [editUser,setEdituser] = useState([])
    useEffect(()=>{
       axios.get('http://localhost:3000/users/' + id)
       .then((response)=>setEdituser(response.data))
       .catch((error)=>console.log(error))
       console.log(editUser)
    },[])
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:3000/users/' + id , editUser)
        .then((response)=>{
            alert('User Updated Sucessfully...')
            navigate('/')
        })
        .catch((error)=>console.log(error))
        
    }
  return (
    <>
     <form onSubmit={handleSubmit}>
    <Paper  elevation={24} sx={{margin:'auto',marginTop:10,padding:4,width:{
        sm:380,
        md:700,
        lg:700
    }}}>
        <Typography variant="h4">Edit user</Typography ><br /><br />
        <TextField
        name='name' 
        onChange={(e)=>setEdituser({...editUser,name:e.target.value})}
        value={editUser.name}
        fullWidth /><br /><br />
        <TextField
        name='username'
        onChange={(e)=>setEdituser({...editUser,username:e.target.value})}
        value={editUser.username}
        fullWidth /><br /><br />
        <TextField
        name='email'
        onChange={(e)=>setEdituser({...editUser,email:e.target.value})}
        value={editUser.email}
        fullWidth /><br /><br />
        <TextField
        name='phone'
        onChange={(e)=>setEdituser({...editUser,phone:e.target.value})}
        value={editUser.phone}
        fullWidth />   <br /><br />
        <Button
         variant="contained" 
         type="submit"
         sx={{fontSize:15}}>
         Edit
        </Button>
        </Paper>
     </form> 
    </>
  )
}

export default EditUser