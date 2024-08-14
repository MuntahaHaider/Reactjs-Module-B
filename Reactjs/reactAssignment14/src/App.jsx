import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import AllProducts from './Screens/AllProducts/AllProducts';
import About from './Screens/About/About';

function App() {
  return (
    <>
     <Routes>
      <Route index element={ <Home /> }/>
      <Route path='/home' element={ <Home /> }/>
      <Route path='/home/allproducts' element= {<AllProducts />}/>
      <Route path='/home/allproducts/about' element={<About />}/>
     </Routes>
    </>
  )
}

export default App
