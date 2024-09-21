import { Box, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import { FormControl } from 'react-bootstrap'
import style from './Input.module.css'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Input = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <h2>inputs</h2>
    {/* simple button */}
    <input type='checkbox'  placeholder='checkbox'/><br /><br />
    <input type='color'  placeholder='color'/><br /><br />
    <input type='date' placeholder='date'/><br /><br />
    <input type='email' placeholder='email'/><br /><br />
    <input type='file' /><br /><br />
    <input type='hidden' placeholder='hidden'/><br /><br />
    <input type='image' placeholder='image'/><br /><br />
    <input type='month' placeholder='month'/><br /><br />
    <input type='number' placeholder='number'/><br /><br />
    <input type='password' placeholder='password'/><br /><br />
    <input type='radio' /><br /><br />
    <input type='range' placeholder='range'/><br /><br />
    <input type='reset' placeholder='reset'/><br /><br />

{/* MUI Buttons */}
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>




    </>
  )
}

export default Input