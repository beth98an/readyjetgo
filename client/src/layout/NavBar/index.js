import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function index() {
  return (
    <nav className="navbar">
      <NavLink className="nav-home" role="nav-home" to='/home' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '3rem',
              margin: '50px',
              textDecoration: 'none'
              
            })}>Home</NavLink>
      <NavLink className="main" to='/main' style={({ isActive }) => ({
              fontSize: '3rem',
              margin: '50px',
              textDecoration: 'none'
            })}>Spinner</NavLink>
      <NavLink className="login" to='/login' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '3rem',
              margin: '50px',
              textDecoration: 'none'
            })}>Log out</NavLink>
    </nav>
  )
}

export default index
