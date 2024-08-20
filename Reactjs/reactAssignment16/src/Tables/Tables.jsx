import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function Tables({data}) {
  const {id} = useParams()
  console.log(id)
  const deleteitem = (id)=>{
   
    axios.delete('http://localhost:3000/users/' + id)
    .then((response)=>{
      alert('User Permanently Deleted....')
    })
    .catch((error)=>console.log(error))
  }
  const navigate = useNavigate()
  return (
    <TableContainer sx={{marginTop:10}} component={Paper}>
      <Table sx={{ minWidth: 650,  }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell component="th" scope="row"><h3>ID</h3></TableCell>
            <TableCell component="th" scope="row"><h3>Name</h3></TableCell>
            <TableCell align="right"><h2>Username</h2></TableCell>
            <TableCell align="right"><h2>Email</h2></TableCell>
            <TableCell align="right"><h2>Number</h2></TableCell>
            <TableCell align="right"><h2>Action</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e,i) => (
            <TableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{e.id}</TableCell>
              <TableCell component="th" scope="row">{e.name}</TableCell>
              <TableCell align="right">{e.username}</TableCell>
              <TableCell align="right">{e.email}</TableCell>
              <TableCell align="right">{e.phone}</TableCell>
              <TableCell align="right">
                <DeleteIcon sx={{cursor:'pointer'}} onClick={()=>deleteitem(e.id)} /> ..... 
                  <EditIcon sx={{cursor:'pointer'}} onClick={()=>navigate(`/edituser/${e.id}`)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
