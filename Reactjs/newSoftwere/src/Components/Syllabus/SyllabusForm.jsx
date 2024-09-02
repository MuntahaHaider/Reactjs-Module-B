import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Box, TextField } from '@mui/material'
import Radiobutton from '../Radiobuttons/Radiobuttons'
import { Button } from 'react-bootstrap'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { database } from '../../Config/firebase'

const SyllabusForm = () => {
   const [subjectName,setSubjectName] = useState('')
   const [classs, setClass] = useState('');
   const [syllabusData,setSyllabusData] = useState('');
   const [refresh, setRefresh] = useState(false);

    const addSyllabusData = async (e)=>{
        e.preventDefault();
        try {
            let syllabusObj = {
                subjectName,
                classs,
              };
            const addData = await addDoc(collection(database ,'SyllabusAdd'), syllabusObj);
            console.log('Document written with ID: ', addData.id);
            alert('Subject Added Successfully!');
            setSyllabusData('')
            setClass('')
        }
        catch(error){
            console.log(error,'Failed to Add Syllabus. Please try again.');
            alert('Failed to Add Syllabus....')

        }
    }

   const getData = async ()=>{
    try{
        let array = []
        const getData = await getDocs(collection(database ,'SyllabusAdd'))
        getData.forEach((e,i)=>{
            array.push({...e.data,id:e.id})
            setRefresh(!refresh)
        })
        setSyllabusData(array)
    }
    catch(error){
        console.log(error)
    } 
   }
   useEffect(()=>{
    getData()
   },[refresh])
// console.log(syllabusData)
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
    <h3 style={{ textAlign: 'center' }}>Syllabus Add</h3><br />
        <form>
          <label htmlFor="firstName">Subject Name:</label>
          <TextField
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            fullWidth
            placeholder="Enter your subject name"
            id="subjecttName"
          /><br /><br />

          <label htmlFor="class">Class:</label>
          <TextField
            type="number"
            value={classs}
            onChange={(e) => setClass(e.target.value)}
            fullWidth
            placeholder="Enter your class"
            id="class"
          /><br /><br /><br />

         <TextField type='file' 
          style={{ width: '100%', backgroundColor: '#008000', color: 'white' ,border:'none',borderRadius:7} } />

         <br /><br />
          <Button
            onClick={addSyllabusData}
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

export default SyllabusForm