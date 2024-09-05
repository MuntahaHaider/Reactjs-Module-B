import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { feeStrutureData } from './FeeStructureData'
import { Box, Paper } from '@mui/material'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FeeVoucher = () => {
    const navigate = useNavigate()
  return (
    <>
<Box sx={{display:'flex'}}>
<Sidebar />
<Box sx={{width:800,marginTop:20}}>
    <h3>Fees Voucher</h3><br />
    {
    feeStrutureData.map((e,i)=>{
        return(
            <>
            <Paper elevation={12} sx={{width:{
      sx:'300px',
      sm:'500px',
      md:'600px',
      lg:'700px',
    },margin:5,padding:3,borderRadius:3}}>
                <div >
                     <h5 style={{textAlign:'center'}}>{e.voucherClass}</h5><br />
                     <div style={{display:'flex',justifyContent:'space-between'}}>
                              <div><h5 >Class:</h5></div>
                         <div>{e.class}</div>
                     </div>

                     <div style={{display:'flex',justifyContent:'space-between'}}>
                              <div><h5>Monthly Fees:</h5></div>
                         <div>{e.monthlyFee}</div>
                     </div>

                     <div style={{display:'flex',justifyContent:'space-between'}}>
                              <div><h5>Yearly Fees:</h5></div>
                         <div>{e.yearlyFee}</div>
                     </div><br />
                     <Button onClick={()=>navigate('/fees/fee-submission')} style={{width:'100%',backgroundColor:'#008000',color:'white',}}>Pay Now</Button>
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

export default FeeVoucher