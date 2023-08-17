import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthLoading() {
const navigate = useNavigate()
  const checkToken = () => {
    const userLocal = localStorage.getItem('user')
    if(userLocal.token){
        navigate('/profile')
    }
    else{
        navigate('/login')
    }
  }
  useEffect(()=>{
    checkToken()
  },[])
  return (
    <h1>Loading...</h1>
  )
}

export default AuthLoading