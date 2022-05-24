import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function index() {
  return (
    <nav className="navbar">
      <NavLink classname="main" to='/main'>Main</NavLink>
      <NavLink classname="login" to='/login'>Log out</NavLink>
    </nav>
  )
}

export default index
