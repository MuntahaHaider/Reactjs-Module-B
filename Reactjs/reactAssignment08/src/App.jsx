import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
function App() {
   const [isLogged,setisLogged] = useState(true)
   const toggle = ()=>{
    setisLogged(!isLogged)
   }
  return (
    <>
    <div className="app">
    <h1 style={{color:"white",fontFamily:"monospace"}}>Login Signup Form</h1><br />
    <div className="form-container">
      {
        isLogged ? <Login funcClick={toggle}/> :
        <Signup funcClick={toggle}/>
      }       
    </div>
    </div>
    </>
  )
}
export default App

