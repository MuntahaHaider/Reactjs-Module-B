import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Product from './Components/Home/Product'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
