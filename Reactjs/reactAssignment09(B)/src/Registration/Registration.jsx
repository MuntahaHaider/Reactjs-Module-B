import React, { useState } from 'react';
import style from './Registration.module.css';
const Registration = () => {
const [formData,setformData] = useState(
  {
    firstName:'',
    lastName:'',
    email: '',
    phone: '',
    address: '',
    course: ''
  }
)
const handleChange = (e) => {
  const { name, value } = e.target;
  setformData({
    ...formData,
    [name]: value
  });
};
const [students, setStudents] = useState([]);
const handleClick = (e) => {
  e.preventDefault();
    const updatedStudents = [...students, formData];
  setStudents(updatedStudents);
  console.log(updatedStudents);
  setformData({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    course: ''
  });
  
};
  return(
    <>
    <form className={style.formcontainer}>

  <label>First Name</label>
  <input  type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required/>

  <label htmlFor="">Last Name</label>
  <input  type="text"  name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />

  <label htmlFor="">Email</label>
  <input  type="email"  name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

  <label htmlFor="">Address</label>
  <input type="address" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />

  <label htmlFor="">City</label>
  <input  type="city"  name="city"  placeholder="City" value={formData.city} onChange={handleChange}  required />

  <label htmlFor="">Phone</label>
  <input type="phone" name="phone"  placeholder="Phone" value={formData.phone} onChange={handleChange} required />

  <label htmlFor="">Course</label>
  <input  type="course" name="course"  placeholder="Course"  value={formData.course} onChange={handleChange} required /> 

    <button onClick={handleClick} type='submit'>register</button>
    </form>
    </>
  )
}
export default Registration;