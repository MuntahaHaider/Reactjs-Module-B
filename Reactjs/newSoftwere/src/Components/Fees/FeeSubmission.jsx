import React, { useState }  from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {  Paper, Select, TextField ,FormControl, InputLabel, MenuItem, Button, Box } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../../Config/firebase';


const FeeSubmission = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const [classs, setClasss] = useState('');
  const [amount, setAmount] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

const feeSubmission = async (e)=>{
e.preventDefault();
try {
 let feeSubObj = {
   name,
   classs,
   amount,
 };
 let getData = await addDoc(collection(database, 'fee-submission'), feeSubObj);
 console.log('Document written with ID: ', getData.id);
 setName('');
 setClasss('');
 setAmount('');
 alert('fee submitted.....')

} catch (error) {
 console.log(error,'Please try again.');
}
  }
  return (
    <>

<Box sx={{display:'flex'}}>
<Sidebar/>
<Box sx={{width:800,marginTop:15}}>
<Paper elevation={12} sx={{width:{
      sx:'300px',
      sm:'500px',
      md:'600px',
      lg:'700px',
    },margin:5,padding:3,borderRadius:3}}>
        <h3>Payment for</h3><br />
        <TextField 
        onChange={(e)=>setName(e.target.value)}
        fullWidth 
        label='Name'/><br /><br />

        <TextField 
        onChange={(e)=>setClasss(e.target.value)}
        fullWidth 
        label='Class'/><br /><br />

        <TextField 
        onChange={(e)=>setAmount(e.target.value)}
        fullWidth 
        label='Amount'/><br /><br />

          <FormControl fullWidth>
      <InputLabel id="payment-method">Payment Method</InputLabel>
      <Select
        labelId="payment-method"
        id="payment-method"
        value={selectedOption}
        label="Payment Method"
        onChange={handleChange}
      >
        <MenuItem value={10}>Credit Card</MenuItem>
        <MenuItem value={20}>PayPal</MenuItem>
        <MenuItem value={30}>Bank Transfer</MenuItem>
        <MenuItem value={40}>Cash</MenuItem>
      </Select>
    </FormControl>
    <br /><br />
    <Button onClick={feeSubmission} style={{width:'100%',backgroundColor:'#008000',color:'white',}}>Submit</Button>

    </Paper>
</Box>
</Box>

    </>
  )
}

export default FeeSubmission