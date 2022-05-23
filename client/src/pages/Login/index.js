import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import Header from '../../layout/Header';
import { NavLink } from 'react-router-dom';
import "./login.css";
import styled from "styled-components";

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [click, setClick] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const responseToken = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
    const token = await responseToken.json()
    localStorage.setItem('jwt', token.jwt)

    const responseAuth = await fetch('http://127.0.0.1:8000/api/auth/', {
      method: 'POST',
      body: JSON.stringify({ token: token.jwt }),
      headers: { 'Content-Type': 'application/json' }
    })
    const content = await responseAuth.json()
    localStorage.setItem('username', content.username)
    dispatch({
      type: "SET_USERNAME",
      value: content.username
    })
    setRedirect(true)
  }

  if (redirect) {
    return navigate('/main')
  }
  

  
  return (
    
    <>
    <Header/>
      <nav className="navbar">
      {/* <NavLink to='/'>Home</NavLink> */}
      <NavLink classname="register" to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </nav>
      <div className="formdiv">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 id="title">Sign In</h1>
        <input type='text' value="Username"id="username" onChange={(e) => setUsername(e.target.value)}></input>
        <input type='password'value="Enter Password" id='password' onChange={(e) => setPassword(e.target.value)}></input>
        <a class="forgot" href="#">Forgot Your Password?</a>
        <a class="forgot" href="/register">Not a member?  Create Account Now</a>
        <input type='submit' id="loginButton" value='Sign in'></input>
        
      </form>
        <div className="box">
        </div>
        
          <div className="box2">
            <h2>Ready, Jet, Go!</h2>
            <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png"></img>
        </div>
    </div>
      
      
    </>
  )
}

export default Login
