import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth,provider } from '../../Firebase/firebase'
import { signInWithPopup } from 'firebase/auth'
import './login.css'
const Login = () => {
    const navigate=useNavigate()

    const handleSubmit=async (event)=>{
        event.preventDefault()
 await signInWithPopup(auth,provider)
        navigate('dashboard')
        
    }
  return (
    <div id='login'>
             <div className='container'>
        <div className='login_wrapper'>
            <form  onSubmit={handleSubmit} className='form'>                
                <button type ='submit' className='btn'>Sign In With Google</button>
            </form>
        </div>
       </div>
      
    </div>
  )
}

export default Login
