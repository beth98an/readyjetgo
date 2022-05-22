import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

function Header() {
  return (
    <nav className="navbar">
      {/* <NavLink to='/'>Home</NavLink> */}
      <NavLink classname="register" to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </nav>
  )
}

export default Header
