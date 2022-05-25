import React from 'react';
import { useSelector } from 'react-redux';
import Maps from '../../components/Map';
import { useNavigate } from 'react-router-dom';
import "./results.css";

function Results() {
  const navigate = useNavigate()
  const place = useSelector(state => state.destination)
  const dest = place.replace(/\s/g, '%20').toLowerCase()
  console.log(dest)
  return (
    <>
      <h1>{place}</h1>
      <button onClick={()=>navigate('/home')}>Go Home</button>
      <div className="mapper" role='map' style={{width:'75%', height:'75%'}}>
          <Maps city={dest}/>
      </div>
      
    </>
  )
}

export default Results
