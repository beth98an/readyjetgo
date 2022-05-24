import React from "react";
import NavBar from '../../layout/NavBar';
import "./home.css"

function Home() {
  return (
    <>
      <NavBar className="bar" />
      <div className= "Home" 
      role="Home">
        <h1>Welcome </h1>
      </div>

    </>
  );
}

export default Home;
