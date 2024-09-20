import React from 'react'
import { auth } from '../Config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
 const handleLogout = ()=>{
   // const auth = getAuth();
   signOut(auth)
   .then(() => {
    localStorage.clear('UserID')
  alert('user signOut.....')
  navigate('/login')
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
 }
  return (
    <>
    <h1>home</h1>
     <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home