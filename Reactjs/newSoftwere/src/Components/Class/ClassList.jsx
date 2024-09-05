import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../Config/firebase'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ClassList = () => {
    const [newAdmission,setNewAdmission] = useState([])

    const getData = async()=>{
        try{
            let array = [];
            const getData = await getDocs(collection(database,'classForm or newAdmission'));
            getData.forEach((e,i)=>{
              array.push({...e.data(),id:e.id})
            })
            setNewAdmission(array)
           }
           catch(error){
            console.log(error)
           }
          }
        
          useEffect(()=>{
            getData()
           },[])
          console.log(newAdmission)
    
  return (
   <>

   <Sidebar />
   <h3 style={{textAlign:'center'}}>Class List</h3><br />
      
      <TableContainer sx={{ maxWidth: '70%' ,marginLeft:'25%' }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
              <TableCell align="right">Qualification</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {newAdmission.map((classs, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{classs.id}</TableCell>
                <TableCell align="right">{classs.firstName}</TableCell>
                <TableCell align="right">{classs.lastName}</TableCell>
                <TableCell align="right">{classs.email}</TableCell>
                <TableCell align="right">{classs.phone}</TableCell>
                <TableCell align="right">{classs.birthDate}</TableCell>
                <TableCell align="right">{classs.qualification}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

   </>
  )
}

export default ClassList