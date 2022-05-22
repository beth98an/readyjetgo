import React from 'react'
import { NavLink } from 'react-router-dom';

function index() {
  return (
    <nav className="navbar">
      <NavLink to='/home'>Home</NavLink>
      <NavLink classname="register" to='/main'>Main</NavLink>
      <NavLink to='/login'>Log out</NavLink>
    </nav>
  )
}

export default index
