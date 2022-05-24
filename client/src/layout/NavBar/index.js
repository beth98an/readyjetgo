import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function index() {
  return (
    <nav className="navbar">
      <NavLink classname="home" role="nav-home" to='/home' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '2rem',
              margin: '50px',
              
            })}>Home</NavLink>
      <NavLink classname="main" to='/main' style={({ isActive }) => ({
              fontSize: '2rem',
              margin: '50px'
            })}>Daily Spin</NavLink>
      <NavLink classname="login" to='/login' style={({ isActive }) => ({
              color: isActive ? '' : '',
              background: isActive ? '' : '',
              fontSize: '2rem',
              margin: '50px'
            })}>Log out</NavLink>
    </nav>
  )
}

export default index
