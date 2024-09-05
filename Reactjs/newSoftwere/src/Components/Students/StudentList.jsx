import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { database } from '../../Config/firebase';
import Sidebar from '../Sidebar/Sidebar';

const StudentList = () => {
  const [studentRegisterData, setStudentRegisterData] = useState([]);

  const getData = async () => {
    try {
      let array = [];
      const getData = await getDocs(collection(database, "StudentRegistration"));
      getData.forEach((doc) => {
        array.push({ ...doc.data(), id: doc.id });
      });
      setStudentRegisterData(array);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
            maxWidth: 700,}}>
    <div style={{  width: '100%' , marginTop:100, color: 'black' }}>
    <h3 style={{ textAlign: 'center' }}>Student List</h3><br />
    <TableContainer sx={{ maxWidth: 900, margin: 'auto', marginTop: '20px' }} >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentRegisterData.map((student, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left">{student.id}</TableCell>
                <TableCell align="right">{student.firstName}</TableCell>
                <TableCell align="right">{student.lastName}</TableCell>
                <TableCell align="right">{student.email}</TableCell>
                <TableCell align="right">{student.classs}</TableCell>
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

export default StudentList;
