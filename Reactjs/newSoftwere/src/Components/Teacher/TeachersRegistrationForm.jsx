import { Box, Button, TextField } from '@mui/material';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { database } from '../../Config/firebase';
import Sidebar from '../Sidebar/Sidebar';
import Radiobutton from '../Radiobuttons/Radiobuttons';


const TeachersRegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [classs, setClass] = useState('');
  const [teacherRegisterdata,setTeacherRgisterdata] = useState()
  const [refresh, setRefresh] = useState(false);

  // const navigate = useNavigate()
  const addTeacherRegisterationdata = async (e) => {
    e.preventDefault();
    try {
      let TeacherRegisterObj = {
        firstName,
        lastName,
        email,
        classs,
      };
      let addData = await addDoc(collection(database, 'TeacherRegistration'), TeacherRegisterObj);
      console.log('Document written with ID: ', addData.id);
      alert('Teacher Registered ...')
      setFirstName('');
      setLastName('');
      setEmail('');
      setClass('');
    //   navigate('/dasboard/teachers/teacherslist') 
    } catch (error) {
      console.log(error,'Failed to register Teacher. Please try again.');
      alert('Failed to register Teacher.....')
    }
  };
  
  const getData = async ()=>{ 
   try{
    let array = []
    const getData = await getDocs(collection(database, "TeacherRegistration"));
     getData.forEach((e,i)=>{
      array.push({...e.data,id:e.id})
      setRefresh(!refresh)
     })
     setTeacherRgisterdata(array)
   }
   catch(error){
    console.log(error)
   }
  }
useEffect(()=>{
  getData()
},[refresh])
// console.log(teacherRegisterdata)
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
    <h3 style={{ textAlign: 'center' }}>REGISTRATION FORM</h3><br />
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

          <label htmlFor="class">Class:</label>
          <TextField
            type="number"
            value={classs}
            onChange={(e) => setClass(e.target.value)}
            fullWidth
            placeholder="Enter your class"
            id="class"
          /><br /><br />

          <Radiobutton /><br /><br />
          <Button
            onClick={addTeacherRegisterationdata}
            style={{ width: '100%', backgroundColor: '#008000', color: 'white' }}
          >
            Submit
          </Button>
        </form>


      </div>
         </Box>
  </Box>








    {/* <Sidebar />
      <div style={{ width: 500, margin: 'auto', color: 'black' }}>
        <h3 style={{ textAlign: 'center' }}>REGISTRATION FORM</h3><br />
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

          <label htmlFor="class">Class:</label>
          <TextField
            type="number"
            value={classs}
            onChange={(e) => setClass(e.target.value)}
            fullWidth
            placeholder="Enter your class"
            id="class"
          /><br /><br />

          <Radiobutton /><br /><br />
          <Button
            onClick={addTeacherRegisterationdata}
            style={{ width: '100%', backgroundColor: '#008000', color: 'white' }}
          >
            Submit
          </Button>
        </form>
      </div> */}
    </>
  );
};

export default TeachersRegistrationForm;
