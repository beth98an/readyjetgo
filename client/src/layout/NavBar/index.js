import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function index() {
  return (
    <nav className="navbar">
      <NavLink className="home" to='/home' style={({ isActive }) => ({
              color: isActive ? '' : '#545e6f',
              background: isActive ? '' : '#f0f0f0',
              fontSize: '2rem',
              margin: '50px'
            })}>Home</NavLink>
      <NavLink className="main" to='/main' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '2rem',
              margin: '50px'
            })}>Main</NavLink>
      <NavLink className="login" to='/login' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '2rem',
              margin: '50px'
            })}>Log out</NavLink>
    </nav>
  )
}

export default index
