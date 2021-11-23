import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';

function App() {

  const [user,setUser] = useState();
  const auth = getAuth(); //Nos permite usar todas las funciones de autenticación de firebase

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {user ? (<Home />) :(<Login/>)}/>{/* Si el usuario esta loggeado voy a Home sino Login */}
        <Route path="/Login" element = {user ? (<Home />) :(<Login/>)}/>
        <Route path="/Register" element = {user ? (<Home />) :(<Register/>)}/>
      </Routes>
    <div className="App">
    
    
    </div>
    </Router>
  );
}

export default App;
