import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';
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
    <>
    <div className="App">
    {/* Si el usuario esta loggeado voy a Home sino Login */}
    {user ? (<Home />) :(<Login/>)}
    </div>
    </>
  );
}

export default App;
