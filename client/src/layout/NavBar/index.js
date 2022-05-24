import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function index() {
  return (
    <nav className="navbar">
      <NavLink classname="home" to='/home' style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              fontSize: '2rem',
              margin: '5px'
            })}>Home</NavLink>
      <NavLink classname="main" to='/main' style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              fontSize: '2rem',
              margin: '5px'
            })}>Main</NavLink>
      <NavLink classname="login" to='/login' style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              fontSize: '2rem',
              margin: '5px'
            })}>Log out</NavLink>
    </nav>
  )
}

export default index
