import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { Box, TextField } from '@mui/material';
import Radiobutton from '../Radiobuttons/Radiobuttons';
import { Button } from 'react-bootstrap';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { database } from '../../Config/firebase';

const ClassForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [qualification, setQualification] = useState('');
  const [newAdmission,setNewAdmission] = useState([])
  const [refresh, setRefresh] = useState(false);
    
  const addAdmission = async (e)=>{
    e.preventDefault();
     try{
        let admissionObj = {
          firstName,
          lastName,
          email,
          phone,
          birthDate,
          qualification,
        }

      const addData = await addDoc(collection(database,'classForm or newAdmission'),admissionObj)
      console.log('Document written with ID: ', addData.id);  
      alert('Admission Successful!');      
      setFirstName(''),
      setLastName('')
      setEmail('')
      setPhone('')
      setBirthDate('')
      setQualification('')
     }
     catch(error){
      console.log(error)
      alert('Admission Faild...!');      

     }
  }

  const getData = async ()=>{
   try{
    let array = [];
    const getData = await getDocs(collection(database,'classForm or newAdmission'));
    getData.forEach((e,i)=>{
      array.push({...e.data,id:e.id})
      setRefresh(!refresh)
    })
    setNewAdmission(array)
   }
   catch(error){
    console.log(error)
   }
  }

  useEffect(()=>{
    getData()
   },[refresh])
  // console.log(newAdmission)

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

    <h3 style={{ textAlign: 'center' }}>ADMISSION FORM</h3><br />
        <form>
          <label htmlFor="firstName">First Name:</label>
          <TextField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            placeholder="Enter your first name"
            id="firstName"
          /><br /><br />

          <label htmlFor="lastName">Last Name:</label>
          <TextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            placeholder="Enter your last name"
            id="lastName"
          /><br /><br />
          <label htmlFor="email">Email:</label>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            placeholder="Enter your email"
            id="email"
          /><br /><br />


          <label htmlFor="phone number">Phone Number:</label>
           <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            placeholder="Enter your phone number"
            id="number"
          /><br /><br />


        <label htmlFor="Birth">Date Of Birth:</label>
           <TextField
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            fullWidth
            placeholder="Enter your date of birth"
            id="birth"
          /><br /><br /> 

        
         <label htmlFor="qualification">Qualification:</label>
          <TextField
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            fullWidth
            placeholder="Enter your Qualification"
            id="qualification"
          /><br /><br />


          <Radiobutton /><br /><br />
          <Button
            onClick={addAdmission}
            style={{ width: '100%', backgroundColor: '#008000', color: 'white' }}
          >
            Submit
          </Button>
        </form>

      </div>
         </Box>
  </Box>

   </>
  )
}

export default ClassForm