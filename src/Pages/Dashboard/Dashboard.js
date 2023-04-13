import React from 'react'
import '../Login/login.css'
import { auth } from '../../Firebase/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'

const Dashboard = () => {
  const navigate=useNavigate()
  const logoutFn=()=>{
    signOut(auth)
    navigate('login')
  }
  return (
    <div id='dashboard' className='container'> 
      <h1>Hello World</h1>
      <button onClick={logoutFn} className='logout_btn'>Logout</button>
    </div>
  )
}

export default Dashboard
