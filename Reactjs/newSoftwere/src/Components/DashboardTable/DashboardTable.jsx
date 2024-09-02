import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'firstName', label: 'First name' },
  { id: 'lastName', label: 'Last name' },
  { id: 'email', label: 'Email' },  // Assuming 'email' was meant to be added.
  { id: 'fullName', label: 'Full name' },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'jon.snow@example.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'cersei.lannister@example.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'jaime.lannister@example.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'arya.stark@example.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'daenerys.targaryen@example.com' },
  { id: 6, lastName: 'Melisandre', firstName: 'None', email: 'melisandre@example.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'ferrara.clifford@example.com' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'rossini.frances@example.com' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'harvey.roxie@example.com' },
];

export default function DashboardTable() {
  return (
    <>
    <h1 style={{textAlign:'center',marginBottom:20}}>Student List</h1>
    <TableContainer component={Paper} style={{ maxHeight: 400 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{`${row.firstName} ${row.lastName}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  );
}









// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios'; // Import axios for fetching data

// const columns = [
//   { id: 'id', label: 'ID' },
//   { id: 'firstName', label: 'First name' },
//   { id: 'lastName', label: 'Last name' },
//   { id: 'age', label: 'Age' },
//   { id: 'fullName', label: 'Full name' },
// ];

// export default function DataTable() {
//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     // Fetch data from your API or database
//     axios.get('https://api.example.com/data') // Replace with your API endpoint
//       .then(response => {
//         setData(response.data); // Set data from API response
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <TableContainer component={Paper} style={{ maxHeight: 400 }}>
//       <Table stickyHeader>
//         <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell key={column.id}>{column.label}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.id}</TableCell>
//               <TableCell>{row.firstName}</TableCell>
//               <TableCell>{row.lastName}</TableCell>
//               <TableCell>{row.age}</TableCell>
//               <TableCell>{`${row.firstName} ${row.lastName}`}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
