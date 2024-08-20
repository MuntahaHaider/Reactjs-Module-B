
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home/Home'
import NewUser from './Screens/NewUser/NewUser'
import EditUser from './Screens/EditUser/EditUser'
import Signup from './Screens/Signup/Signup'
import Login from './Screens/Login/Login'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <>
      <div >
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='createuser' element={<NewUser />}/>
        <Route path='/edituser/:id' element={<EditUser/>}/>

      </Routes>
      </div>
    </>
  )
}

export default App
