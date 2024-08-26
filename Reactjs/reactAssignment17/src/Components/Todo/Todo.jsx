import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import style from './Todo.module.css'
import { Paper } from '@mui/material';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, writeBatch } from 'firebase/firestore';
import { database } from '../../Config/firebase';
const Todo = () => {
    const [todoTitle,setTodotitle] = useState('')  
    const [description,setDescription] = useState('')
    const [userdata, setUserdata] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const AddData = async (e)=>{
        e.preventDefault();
        try {
            let userObj = {
                todoTitle,
              description,
            };
            const docRef = await addDoc(collection(database, 'todo'),userObj)
            console.log(docRef);
            setRefresh(!refresh)
          } catch (error) {
            console.log(error);
          }
        }
        const gettodoData = async ()=>{
            try{
                let array = []
                const getData = await getDocs(collection(database, "todo"));
                getData.forEach((e,i)=>{
                    array.push({...e.data(),id:e.id})
                    
                })
                setUserdata(array)
            }
            catch(error){
                console.log(error)
            }
        }
useEffect(()=>{
    gettodoData()
},[refresh])

const deleteAll = async () => {
    const collectionRef = collection(database, "todo"); // Replace "todo" with your collection name
    const querySnapshot = await getDocs(collectionRef);

    const batch = writeBatch(database); // Correct way to create a batch

    querySnapshot.forEach((doc) => {
        const docRef = doc.ref;
        batch.delete(docRef); // Add each delete operation to the batch
    });

    await batch.commit(); // Commit the batch to delete all documents
    console.log("All documents in the collection deleted");
};

 const DeleteTodo = async (id)=>{
    console.log(id)
    await deleteDoc(doc(database, "todo", id));
    
 }
 const EditTodo = async (id)=> {
    let updateTitle = prompt('enter new title...')
    let updateDesc = prompt('enter new description...')
    let todoObj = {
        todoTitle:updateTitle,
        description:updateDesc
    }
    const updateTodo = await updateDoc(doc(database, "todo", id), todoObj);
    console.log(updateTodo)
    setRefresh(!refresh)
 }
// console.log(userdata)

  return ( 
    <>
    <div className={style.cont}>
    <h1>Things ToDo...</h1><br />
    <input className={style.title} onChange={(e)=>setTodotitle(e.target.value)} value={todoTitle} placeholder='type.....' type="text" /> 
 <input className={style.desc} onChange={(e)=>setDescription(e.target.value)} value={description}  placeholder='enter description'  type="text" />
   <AddIcon onClick={AddData} sx={{fontSize:40,color:'white',cursor:'pointer'}}/>
   <DeleteIcon onClick={deleteAll} sx={{fontSize:40,color:'white',cursor:'pointer'}}/>
   {
    userdata.map((e,i)=>{
        return(
            <>
              <div key={i}>
              <br />
              <li key={i}><span>Title :&nbsp;</span>{e.todoTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Description :&nbsp;</span> {e.description}&nbsp;&nbsp;&nbsp; <DeleteIcon onClick={()=>DeleteTodo(e.id)}   sx={{cursor:'pointer'}}/>...<EditIcon onClick={()=>EditTodo(e.id)} sx={{cursor:'pointer'}} /></li>
              </div>
            </>
        )
    })
 }
   </div>
    </>
  )
}

export default Todo