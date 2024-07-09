import React, { useState } from 'react';
import LoginForm from './Login/Login';
import SignupForm from './Signup/Signup';
import './App.css'
const App = () => {
         const [showLogin,setShowLogin]  = useState(true)
        const toggleForm = ()=>{
            setShowLogin(!showLogin)
        }
    return(
        <>
        <div className="app">
        <h1 style={{color:"white"}}>Login Signup Form</h1>
        <div className="form-container">
        { 
        showLogin ? <LoginForm/> 
        : <SignupForm/>
        }
        <p>
            {
                showLogin ? 
                "Don't have an account? "
                : "Already have an account ? "
            }
            <span onClick={toggleForm} className="form-toggle" >
            {
             showLogin ? 
             'Signup here' 
             : 'Login here'
            }
            </span>
        </p>
        </div>
        </div>
        </>
    )
};

export default App;
