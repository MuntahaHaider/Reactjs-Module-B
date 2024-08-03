import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  
const [data,setData] = useState({
    email: '',
    password: '',
})
const navigate = useNavigate();

const handleChange = (e)=>{
  const{name , value} = e.target;
  setData({...data,[name]:value})
}
console.log(handleChange)
const dataStoreLocalStorage =(e)=>{
  e.preventDefault();
  // Check if all fields are filled
  if(!data.email || !data.password){
    alert('Please fill in all fields');
    return
  }
  // Retrieve existing users from local storage
  let users = JSON.parse(localStorage.getItem('users'))
  if(users === null){
    users = [];
  }
  // Check if the entered email and password match any user
  const user = users.find(user => user.email === data.email && user.password === data.password)
  if(user){
    // store login data in local storage
    let loginData = JSON.parse(localStorage.setItem('login'))
    if(loginData === null){
       loginData=[];
    }
    loginData.push(data);
    localStorage.setItem('login' , JSON.stringify(loginData))
    // Clear all fields
    setData({
      email: '',
      password: '',
    });
    // Navigate to the dashboard
    navigate('/dashboard')
  } 
  else(
    alert('Invalid email or password..')
  )
}
console.log(dataStoreLocalStorage)

  return (
    <form >
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={handleChange}
          required
        />
      </div>
      <NavLink to='/dashboard' onClick={dataStoreLocalStorage}>Login</NavLink>
      </form>
  );
};

export default Login;
