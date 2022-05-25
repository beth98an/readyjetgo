import React, { useEffect } from 'react'
import NavBar from '../../layout/NavBar';
import "./home.css"
import Carousel from "react-elastic-carousel"
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Home() {
  const navigate = useNavigate()
  const user = useSelector(state => state.username)

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
        <h1 className="homeTitle">Welcome {user},</h1>
        <div className='boxContainer'>
        <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <Card className="one" text="Lorem ipsum"/>
          <Card text="1"/>
          <Card text="1"/>
          <Card text="1"/>
          <Card text="1"/>
          <Card text="1"/>
          <Card text="1"/>
        </Carousel>

        </div>
        <button className="randomButton" data-testid='quizbtn' role='main' onClick={() => navigate('/random')}>Random Destination</button>
            <button className="quizButton" data-testid='quizbtn' role='main' onClick={() => navigate('/quiz')}>Take a quiz now</button>
      </div>
      </div>

    </>
  );
}

export default Home;
