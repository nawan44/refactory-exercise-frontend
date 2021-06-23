import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login'
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard/>
       <Login />
      <Register />
    </div>
  );
}

export default App;
