import './App.css';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
  const {user}=useContext(AuthContext)
  console.log(user)
  return (
    <div className="app">
      {!user?
      (<Login />)
      :
      (<Dashboard />)
    }

     
    </div>
  );
}

export default App;
