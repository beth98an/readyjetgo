import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../layout/NavBar';
import "./main.css";
import RandomLocation from '../../components/RandomLocation/RandomLocation'
import App from '../../components/Spinner/Spinner';

function Auth() {
    
    return (
        <>
        
        <NavBar/>
        <App />
        


            
        </>
    )
}

export default Auth
