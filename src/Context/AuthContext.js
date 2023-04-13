import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useState ,useEffect} from 'react'
import { auth } from '../Firebase/firebase'
export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
    const [user,setUser]=useState(null)
   
    useEffect(()=>{
        const unSub=onAuthStateChanged(auth,(user)=>{setUser(user)});
        return ()=>{
            unSub();
        }
    },[]);
   
  return (
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
