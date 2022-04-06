import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import Products from "./Products";
import NewProduct from "./NewProduct";
import Account from "./Account";
import MyProducts from "./MyProducts";
import Product from "./Product";
import ProductDemand from "./ProductDemand";
import PaymentGateway from "./PaymentGateway";


function App() {
  const [user, setUser] = useState();
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
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        {/* Si el usuario esta loggeado voy a Home sino Login */}
        <Route path="/Login" element={user ? <Home /> : <Login />} />
        <Route path="/Register" element={user ? <Home /> : <Register />} />
        <Route path="/NewProduct" element={user ? <NewProduct /> : <Login />} />
        <Route path="/NewProduct/:id" element={user ? <NewProduct /> : <Login />} />
        <Route path="/Account" element={user ? <Account /> : <Login />} />
        <Route path="/MyProducts" element={user ? <MyProducts /> : <Login />} />
        <Route path="/ProductDemand" element={user ? <ProductDemand /> : <Login />} />
        <Route path="/Product/:id" element={user ? <Product /> : <Login />} />
        <Route path="/PaymentGateway" element={user ? <PaymentGateway /> : <Login />} />
        <Route path="/Products/salt" element={user ? <Products key="salt" type="salt" /> : <Login />} />
        <Route path="/Products/flour" element={user ? <Products key="flour" type="flour" /> : <Login />} />
        <Route path="/Products/yeast" element={user ? <Products key="yeast" type="yeast" /> : <Login />} />
        <Route path="/Products/bread" element={user ? <Products key="bread" type="bread" /> : <Login />} />
      </Routes>
      <div className="App"></div>
    </Router>
  );
}

export default App;
