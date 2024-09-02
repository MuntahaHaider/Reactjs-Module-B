import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../Config/firebase'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

const SyllabusList =  () => {
    const [addSyllabusData,setSyllabusData] = useState([]) 
    const getData = async ()=>{
        try{
            let array = [];
            const getData = await getDocs(collection(database,'SyllabusAdd'));
            getData.forEach((e,i)=>{
                array.push({...e.data(),id:e.id})
                console.log('syllabus add...')

            })
            setSyllabusData(array)
        }
        catch(error){
            console.error("Error fetching data: ", error);
        }
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(addSyllabusData)
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
    <h3 style={{textAlign:'center'}}>Syllabus List</h3><br />
      <TableContainer sx={{  maxWidth: '90%'  }} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="right">Subject Name</TableCell>
              <TableCell align="right">Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addSyllabusData.map((syllabus, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{syllabus.id}</TableCell>
                <TableCell align="right">{syllabus.subjectName}</TableCell>
                <TableCell align="right">{syllabus.classs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
</Box>
</Box>




</>  )
}

export default SyllabusList