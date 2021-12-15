import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../Config/firebase";
import "./Navbar.css";
const Navbar = () => {
  const log_out = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <header class="header">
      <div class="mid">
        <ul class="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li class="upper-links dropdown">
            <Link to="/Products" class="links"> Products </Link>
            <ul class="dropdown-menu">
              <li class="profile-li">
                <Link to="/Products">Products</Link>
              </li>
              <li class="profile-li">
                <Link to="/Products">Products</Link>
              </li>
              <li class="profile-li">
                <Link to="/Products">Products</Link>
              </li>
              <li class="profile-li">
                <Link to="/Products">Products</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/Account">Account</Link>
          </li>
          <button onClick={log_out}>logout</button>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
