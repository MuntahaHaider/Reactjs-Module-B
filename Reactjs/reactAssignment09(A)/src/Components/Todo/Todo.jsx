import React, { useState } from 'react'
import style from './Todo.module.css'
import { VscAdd } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = () => {
    const [inputData,setInputData] = useState('')  
    const [Item,setItem] = useState([])

    const addItems = (e)=>{
        if(inputData){
            setItem([...Item,inputData])
            setInputData('');
            return
        }
    }
    const deleteAll = ()=>{
        setItem([])
        setInputData('');
    }
    const deleteItem = (index) => {
        const updatedItems = Item.filter((e,i)=>{
            return index !== i
        })
        setItem(updatedItems);
      };
      const editItem = (index) => {
        const edited = prompt("Edit the item:", Item[index]);
        if (edited !== null) {
          const updatedItems = Item.slice();
          updatedItems[index] = edited;
          setItem(updatedItems);
        }
      };
   return ( 
    <>
    <div className={style.cont}>
     <h1>Things toDo...</h1>
    <input  onChange={(e)=>setInputData(e.target.value)} value={inputData} placeholder='type.....' type="text" />
    <VscAdd  onClick={addItems} size={35}/> 
    <MdDelete onClick={deleteAll} size={40}/>
<div>
    {
        Item.map((e,i)=>{
            return(
                <li key={i}>{e} 
                <AiOutlineDelete onClick={() => deleteItem(i)} size={30} />
                <CiEdit onClick={() => editItem(i)} size={30} />
                </li>
            )
        })
    }
</div>
</div>
    </>
  )
}
export default Todo



