import React from 'react'
import { feeStrutureData } from './FeeStructureData'
import { Box, Paper } from '@mui/material'
import Sidebar from '../Sidebar/Sidebar'

const FeeStructure = () => {
  return (
   <>
<Box sx={{ display: 'flex' }}>
<Sidebar />
<Box sx={{width:800,marginTop:20}}>
<h3>Fees Structure</h3><br />
   {
    feeStrutureData.map((e,i)=>{
        return(
            <>
            <Paper elevation={12} sx={{width:{
      sx:'400px',
      sm:'500px',
      md:'600px',
      lg:'700px',
    },margin:5,padding:3,borderRadius:3}}>
                <div key={i} >
                     <h4 style={{textAlign:'center'}}>{e.class}</h4><br />
                     <div style={{display:'flex',justifyContent:'space-between'}}>
                              <div><h5 style={{color:'#008000'}}>Monthly Fees:</h5></div>
                         <div>{e.monthlyFee}</div>
                     </div>

                     <div style={{display:'flex',justifyContent:'space-between'}}>
                              <div><h5>Yearly Fees:</h5></div>
                         <div>{e.yearlyFee}</div>
                     </div>
                </div>
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

export default FeeStructure