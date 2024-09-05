import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Radiobutton from '../Radiobuttons/Radiobuttons';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import StudentList from './StudentList';
import { database } from '../../Config/firebase';
import Sidebar from '../Sidebar/Sidebar';

const StudentRegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [classs, setClass] = useState('');
  const [studentRegisterdata,setStudentRgisterdata] = useState()
  const [refresh, setRefresh] = useState(false);

  // const navigate = useNavigate()
  const addStudentRegisterationdata = async (e) => {
    e.preventDefault();
    try {
      let studentRegisterObj = {
        firstName,
        lastName,
        email,
        classs,
      };
      let getData = await addDoc(collection(database, 'StudentRegistration'), studentRegisterObj);
      console.log('Document written with ID: ', getData.id);
      alert('Student Registered....')
      setFirstName('');
      setLastName('');
      setEmail('');
      setClass('');
    //   navigate('/dasboard/teachers/teacherslist') 
    } catch (error) {
      console.log(error,'Failed to register student. Please try again.');
      alert('Failed to register student.....')

    }
  };
  
  const getData = async ()=>{ 
   try{
    let array = []
    const getData = await getDocs(collection(database, "StudentRegistration"));
     getData.forEach((e,i)=>{
      array.push({...e.data,id:e.id})
      setRefresh(!refresh)
     })
     setStudentRgisterdata(array)
   }
   catch(error){
    console.log(error)
   }
  }
useEffect(()=>{
  getData()
},[refresh])
// console.log(studentRegisterdata)
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
            maxWidth: 700,            
          }}
        >
          <div  style={{  width: '100%' , marginTop:100, color: 'black' }}>
            <h3 style={{ textAlign: 'center' }}>REGISTRATION FORM</h3>
            <br />
            <form>
              <label htmlFor="firstName">First Name:</label>
              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                placeholder="Enter your first name"
                id="firstName"
              />
              <br /><br />

              <label htmlFor="lastName">Last Name:</label>
              <TextField
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                placeholder="Enter your last name"
                id="lastName"
              />
              <br /><br />

              <label htmlFor="email">Email:</label>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                placeholder="Enter your email"
                id="email"
              />
              <br /><br />

              <label htmlFor="class">Class:</label>
              <TextField
                type="number"
                value={classs}
                onChange={(e) => setClass(e.target.value)}
                fullWidth
                placeholder="Enter your class"
                id="class"
              />
              <br /><br />

              <Radiobutton />
              <br /><br />
              <Button
                onClick={addStudentRegisterationdata}
                style={{ width: '100%', backgroundColor: '#008000', color: 'white' }}
              >
                Submit
              </Button>
            </form>
          </div>
        </Box>
      </Box>
      

    </>
  );
};

export default StudentRegistrationForm;




