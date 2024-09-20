import { Grid, Paper, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../store/slices/signupAuthSlice';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { loading, error } = useSelector((state) => state.signupauth);

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signupUser(  { name, username, email, password }))
      .unwrap()
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Grid container spacing={3} sx={{ paddingTop: '40px', width: '100%' }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
            alt=''
            style={{ width: 100, margin: '50', marginLeft: '40%' }}
          /> <br /><br />
          <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>
            WELCOME TO LEARNING <br /> MANAGEMENT SYSTEM
          </h3>
          <br /><br />
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
            alt='Introduction Image'
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography component='div' sx={{ paddingRight: { md: 2 }, padding: '20px', color: 'gray' }}>
            <form onSubmit={handleSignup}>
              <Paper elevation={24} sx={{margin:'auto',marginTop:10,padding:4,width:{
        sm:380,
        md:600,
        lg:550    }}}>
                <Typography variant='h4'>Signup</Typography><br /><br />
                <TextField onChange={(e) => setName(e.target.value)} fullWidth label='Name' /><br /><br />
                <TextField onChange={(e) => setUsername(e.target.value)} fullWidth label='Username' /><br /><br />
                <TextField onChange={(e) => setEmail(e.target.value)} fullWidth label='Email' /><br /><br />
                <TextField onChange={(e) => setPassword(e.target.value)} fullWidth label='Password' /><br /><br />
                <Button  variant='contained' type='submit' sx={{ fontSize: 15 }}>
                  Signup
                </Button><br /><br />
                <h5>
                  Already have an account? <NavLink to='/login'>Login</NavLink>
                </h5>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </Paper>
            </form>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
