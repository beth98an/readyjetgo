import React from 'react';
import Maps from '../../components/Map';
import "./results.css";
function Results() {
  return (
      <div className="map"style={{width:'75%', height:'75%'}}>
          <Maps city='london'/>
      </div>
  )
}

export default Results
