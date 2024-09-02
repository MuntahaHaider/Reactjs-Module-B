import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Box, TextField } from '@mui/material'
import Radiobutton from '../Radiobuttons/Radiobuttons'
import { Button } from 'react-bootstrap'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { database } from '../../Config/firebase'

const SubjectAdd = () => {
   const [subjectName,setSubjectName] = useState('')
   const [classs, setClass] = useState('');
   const [subjectData,setSubjectData] = useState('');
   const [refresh, setRefresh] = useState(false);

    const addSubjectData = async (e)=>{
        e.preventDefault();
        try {
            let subjectObj = {
                subjectName,
                classs,
              };
            const addSubjectData = await addDoc(collection(database ,'SubjectAdd'), subjectObj);
            console.log('Document written with ID: ', getData.id);
            alert('Subject Added Successfully!');
            setSubjectName('')
            setClass('')
        }
        catch(error){
            console.log(error,'Failed to Add subject. Please try again.');
            alert('Failed to Add subject....')

        }
    }

   const getData = async ()=>{
    try{
        let array = []
        const getData = await getDocs(collection(database ,'SubjectAdd'))
        getData.forEach((e,i)=>{
            array.push({...e.data,id:e.id})
            setRefresh(!refresh)
        })
        setSubjectData(array)
    }
    catch(error){
        console.log(error)
    } 
   }
   useEffect(()=>{
    getData()
   },[refresh])
// console.log(subjectData)
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

    <h3 style={{ textAlign: 'center' }}>Subject Add</h3><br />
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
          /><br /><br />

          <Radiobutton /><br /><br />
          <Button
            onClick={addSubjectData}
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

export default SubjectAdd