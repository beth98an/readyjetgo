import React from "react";
import Header from '../../layout/Header';
import NavBar from '../../layout/NavBar';
import "./home.css"

function Home() {
  return (
    <>
      <NavBar />
      <div className= "Home" role="Home">You seem like you want the travel bug, well you have come to the right place!</div>
    </>
  );
}

export default Home;
