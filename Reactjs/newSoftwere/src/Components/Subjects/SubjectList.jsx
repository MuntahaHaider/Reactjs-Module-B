import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar'
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../Config/firebase';

const SubjectList = () => {
   const [addSubjectData,setAddSubjectDta] = useState([])
   const getData = async ()=>{
    try{
        let array = []
        const getData = await getDocs(collection(database ,'SubjectAdd'))
        getData.forEach((e,i)=>{
          array.push({...e.data(),id:e.id})
        })
        setAddSubjectDta(array)
    }
    catch(error){
      console.error("Error fetching data: ", error);
    } 
   }
   useEffect(()=>{
    getData()
   },[])
   console.log(addSubjectData)
  return (
    <>

<Box sx={{ display: 'flex' }}>
  <Sidebar />
         <Box component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            display: 'flex',
            justifyContent: 'center',
            maxWidth: 1000,}}>
    <div style={{  width: '100%' , marginTop:100, color: 'black' }}>
    <h3 style={{textAlign:'center'}}>Subject List</h3><br />
      <TableContainer sx={{ maxWidth: '90%'  }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="right">Subject Name</TableCell>
              <TableCell align="right">Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addSubjectData.map((subject, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{subject.id}</TableCell>
                <TableCell align="right">{subject.subjectName}</TableCell>
                <TableCell align="right">{subject.classs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      </div>
         </Box>
  </Box>
    </>
  )
}

export default SubjectList