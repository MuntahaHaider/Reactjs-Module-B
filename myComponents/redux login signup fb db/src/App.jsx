import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Screens/Signup';
import { Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import Home from './Screens/Home';
import AuthRoute from './Routes/AuthRoute';
import ProtectedRoute from './Routes/ProtectedRoute';

function App() {

  return (
    <>
    <Routes >
      <Route element={<AuthRoute/>}>
           <Route path='/' element={<Signup />}/>
           <Route path='/login' element={<Login />}/>
      </Route>

      <Route element={<ProtectedRoute />}>
           <Route path='/home' element={<Home />}/>

      </Route>
    </Routes>
      
    </>
  )
}

export default App
