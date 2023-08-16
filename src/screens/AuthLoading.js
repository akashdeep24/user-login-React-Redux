import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthLoading() {
const navigate = useNavigate()
  const checkToken = () => {
    const user = localStorage.getItem('user')
    if(user){
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