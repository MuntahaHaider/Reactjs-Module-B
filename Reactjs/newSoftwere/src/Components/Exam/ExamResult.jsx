import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Box, Paper, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Table } from 'react-bootstrap'
import { examHeadingdata } from './ExamScheduleData'

const ExamResult = () => {
  return (
    <>
<Box sx={{display:'flex'}}>
<Sidebar />
<Box sx={{width:900,marginTop:20}}>
<h3>Exam Results</h3><br /><br />
    {
    examHeadingdata.map((e, i) => (
  <div key={i}>
        <h5 style={{color:'black',textAlign:'center',}}>{e.result}</h5>
    <TableContainer>
      <Paper elevation={12} sx={{ width:{
      sx:'300px',
      sm:'500px',
      md:'600px',
      lg:'800px',
    }, margin: 5,padding: 1, borderRadius: 3 }}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"><h5>Student Name</h5></TableCell>
              <TableCell align="center"><h5>Roll Number</h5></TableCell>
              <TableCell align="right"><h5>Grade</h5></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
    </TableContainer>
  </div>
))
}
</Box>
</Box>
    </>
  )
}

export default ExamResult