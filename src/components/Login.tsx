import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <div>Login</div>
      <div></div>
    </>
  )
}

export default Login