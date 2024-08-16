import React, { useEffect, useState } from 'react'
import Tables from '../../Tables/Tables'
import axios from 'axios'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [userData,setUserData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then((response)=>setUserData(response.data))
        .catch((error)=>console.log(error))
    },[])
    console.log(userData);
    const navigate = useNavigate()
  return (
    <>
    <h1 style={{fontSize:40}}>User Data</h1>
    <Button 
    onClick={()=>navigate('/createuser')} 
    sx={{float:"right",fontSize:20}}>
        Create New User
        </Button>
    <Tables data={userData}/>
    </>
  )
}

export default Home