import React, { useEffect } from 'react'

import NavBar from '../../layout/NavBar';
import "./main.css";

import App from '../../components/Spinner/Spinner';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

function Auth() {
    const { width, height } = useWindowSize()
    
    return (
        <>
        <div>
        <NavBar/>
        
        <App />
        
        <Confetti
                width={width}
                height={height}
    />
    <h2 className="instructions">Have you ever been in a group where you can't come to a decision? Well today is your lucky day! All you have to do is input your selected destinations of travel into the wheel and spin at your risk. Let the wheel decide for you! Double click on a triangle to edit the text and add your destination</h2>
    </div>
   
        


            
        </>
    )
}

export default Auth
