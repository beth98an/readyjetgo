import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../layout/NavBar';
import "./main.css";

function Auth() {
    const navigate = useNavigate()

    useEffect(() => {
        (
            async () => {
                if (!localStorage.getItem('jwt')) {
                    localStorage.clear()
                    navigate('/login')
                } else {
                    const token = localStorage.getItem('jwt')
                    const options = {
                        method: 'POST',
                        body: JSON.stringify({ token: token }),
                        headers: { 'Content-Type': 'application/json' }
                    }
                    const response = await fetch('http://127.0.0.1:8000/api/auth/', options)
                    if (response.status === 500) {
                        localStorage.clear()
                        navigate('/login')
                    }
                }
            }
        )
            ()
    }, [])

    return (
        <>
        
        <NavBar/>
            <button>Random Destination</button>
            <button>Take a quiz</button>
        </>
    )
}

export default Auth
