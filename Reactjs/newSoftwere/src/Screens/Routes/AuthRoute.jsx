import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = () => {
  return !localStorage.getItem('UserID') 
  ? <Outlet /> : 
  <Navigate to={'/student/student-list'}/>
}

export default AuthRoute