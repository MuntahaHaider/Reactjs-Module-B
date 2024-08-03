import React, { useState } from 'react';
import {  Form, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const dataStore = (e) => {
    e.preventDefault();

    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
      alert('Please fill in all fields');
      return;
    }

    let users = JSON.parse(localStorage.getItem('Signup'));
    if (users === null) {
        users = [];
      }
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    setUserData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        })
        navigate('/login');
  };
  return (
    <form>
      <div>
        <label>First Name</label><br />
        <input
        required
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name</label><br />
        <input
        required
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label><br />
        <input
        required
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label><br />
        <input
        required
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          
        />
      </div>
    
        <NavLink to='/login' onClick={dataStore}>Signup</NavLink>

    
    </form>
  );
};

export default Signup;
