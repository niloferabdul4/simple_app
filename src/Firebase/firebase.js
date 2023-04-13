// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3WlNH8IHbFJ63rwKFsXobGO8ydzUDQN4",
  authDomain: "simpleproj-70c9a.firebaseapp.com",
  projectId: "simpleproj-70c9a",
  storageBucket: "simpleproj-70c9a.appspot.com",
  messagingSenderId: "961078118841",
  appId: "1:961078118841:web:d47ebd6d2b46acdb26ce68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
export const provider=new GoogleAuthProvider()
export  {auth,db}
