import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { examScheduleData } from './ExamScheduleData'
import { Box, Paper } from '@mui/material'
import { Button } from 'react-bootstrap'

const ExamSchedule = () => {
  return (
   <>

<Box sx={{display:'flex'}}>
<Sidebar />
<Box sx={{width:800,marginTop:20}}>
<h3>Exam Schedule</h3><br />
   {
    examScheduleData.map((e,i)=>{
      return(
        <>
        <Paper elevation={12} sx={{width:{
      sx:'300px',
      sm:'500px',
      md:'600px',
      lg:'700px',
    },margin:5,padding:3,borderRadius:3}}>
                <div >
                     <h4 style={{textAlign:'center'}}>{e.heading}</h4><br />
                     <div style={{display:'flex',justifyContent:'space-between'}}>
                              <div><h5 style={{color:'#008000'}}>Date:</h5></div>
                         <div>{e.date}</div>
                     </div>

                     <div style={{display:'flex',justifyContent:'space-between'}}>
                              <div><h5>Time Start</h5></div>
                         <div>{e.startTime}</div>
                     </div>
                </div><br />
                <Button style={{width:'100%',backgroundColor:'#008000',color:'white',}}>View Detail</Button>
            </Paper>
        </>
      )
    })
   }
</Box>
  </Box>

   </>
  )
}

export default ExamSchedule