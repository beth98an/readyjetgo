import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function index() {
  return (
    <nav className="navbar">
      <NavLink classname="register" to='/main'>Main</NavLink>
      <NavLink activeStyle={{ color: 'black' }}to='/login'>Log out</NavLink>
    </nav>
  )
}

export default index
