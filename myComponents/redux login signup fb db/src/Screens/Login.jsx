import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/slices/loginAuthSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.loginauth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        alert('Login successful! Welcome to the Dashboard');
        navigate('/home');
      })
      .catch((err) => {
        console.error(err);
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
          />
          <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>
            WELCOME TO LEARNING <br /> MANAGEMENT SYSTEM
          </h3>
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
            alt='Introduction Image'
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography component='div' sx={{ paddingRight: { md: 2 }, padding: '20px', color: 'gray' }}>
            <form onSubmit={handleLogin}>
              <Paper elevation={24} sx={{margin:'auto',marginTop:10,padding:4,width:{
        sm:380,
        md:600,
        lg:550
    }}}>
                <Typography variant='h4'>Login</Typography><br /><br />
                <TextField onChange={(e) => setEmail(e.target.value)} fullWidth label='Email' /><br /><br />
                <TextField onChange={(e) => setPassword(e.target.value)} fullWidth label='Password' /><br /><br />
                <Button  variant='contained' type='submit' sx={{ fontSize: 15 }}><br /><br />
                  Login
                </Button><br /><br />
                <h5>
                  Don't have an account? <NavLink to='/'>Signup</NavLink>
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

export default Login;
