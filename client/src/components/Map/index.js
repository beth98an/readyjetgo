import React, {useEffect, useMemo, useState} from 'react';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import axios from 'axios'
import './map.css'

const Maps = (props) => {
  const [location, setLocation] = useState([]);
  const cityy = props.city

  useEffect(() => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityy}.json?access_token=pk.eyJ1IjoiYmV0aDk4YW4iLCJhIjoiY2wzaXRwYnBtMDA3bjNqcDhvcG05Z3N4YyJ9.VHEO6heZljZu6jzliXUzww`)
    .then(resp => setLocation(resp.data.features[0].center))
    
  }, [])

  console.log(location)
  const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyDoQPawEex28bgtWYSZoyBDECy1KHJHWZA"})

  

  if (!isLoaded) return (<div>Loading map...</div>)
  

  return (
          <Map/>
  
  );
  function Map() {
    const center = useMemo(() => ({lat: location[1], lng: location[0]}),[])
    return(
      <GoogleMap zoom={10} center={center} mapContainerClassName='map'>
        <Marker position={center}/>
      </GoogleMap>

    );
  }
}

export default Maps
