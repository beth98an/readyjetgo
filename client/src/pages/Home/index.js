import React, { useEffect } from 'react'
import NavBar from '../../layout/NavBar';
import "./home.css"
import Carousel from "react-elastic-carousel"
import Card from '../../components/Card/Card'
import RandomLocation from '../../components/RandomLocation/RandomLocation'
import { useNavigate } from 'react-router-dom'

function Home() {
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

  const breakPoints = [
    { width: 400, itemsToShow:1 },
    { width: 768, itemsToShow:2 },
    { width: 1200, itemsToShow:3 },
    { width: 1500, itemsToShow:4 }
  ]
  return (
    <>
      <NavBar className="bar" />
      <div className= "Home" 
      role="Home">
        <h1 className="homeTitle">Welcome User</h1>
        <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <Card number="1"/>
          <Card number="2"/>
          <Card number="3"/>
          <Card number="4"/>
          <Card number="5"/>
          <Card number="6"/>
          <Card number="7"/>
        </Carousel>

        </div>
        <button className="randomButton" data-testid='quizbtn' role='main' onClick={() => navigate('/random')}>Random Destination</button>
            <button className="quizButton" data-testid='quizbtn' role='main' onClick={() => navigate('/quiz')}>Take a quiz</button>
      </div>

    </>
  );
}

export default Home;
