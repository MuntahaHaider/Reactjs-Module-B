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
    <div className='form-container'>
    <h3 style={{fontSize:40}}>User's Data</h3>
    
    <Button 
    onClick={()=>navigate('/signup')} 
    sx={{float:"right",fontSize:15,fontWeight:'bold',color:'black'}}>
        Signup 
        </Button><Button 
    onClick={()=>navigate('/login')} 
    sx={{float:"right",fontSize:15,fontWeight:'bold',color:'black'}}>
       Login
        </Button>
    <Button 
    onClick={()=>navigate('/createuser')} 
    sx={{float:"right",fontSize:15,fontWeight:'bold',color:'black'}}>
        Create New User
        </Button>

    <Tables data={userData}/>
    </div>
    </>
  )
}

export default Home