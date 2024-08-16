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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell ><h3>Name</h3></TableCell>
            <TableCell align="right"><h4>Username</h4></TableCell>
            <TableCell align="right"><h4>Email</h4></TableCell>
            <TableCell align="right"><h4>Number</h4></TableCell>
            <TableCell align="right"><h4>Action</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e,i) => (
            <TableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {e.name}
              </TableCell>
              <TableCell align="right">{e.username}</TableCell>
              <TableCell align="right">{e.email}</TableCell>
              <TableCell align="right">{e.phone}</TableCell>
              <TableCell align="right">
                <DeleteIcon/> ..... <EditIcon/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
