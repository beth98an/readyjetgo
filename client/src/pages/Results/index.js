import React from 'react';
import { useSelector } from 'react-redux';
import Maps from '../../components/Map';
import "./results.css";
function Results() {
  const place='London'
  const dest = place.replace(/\s/g, '%20').toLowerCase()
  console.log(dest)
  return (
      <div className="mapper" role='map' style={{width:'75%', height:'75%'}}>
          <Maps city={dest}/>
      </div>
  )
}

export default Results
