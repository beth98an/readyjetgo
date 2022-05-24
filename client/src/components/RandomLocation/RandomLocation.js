import React, {useState} from "react";
import "./random.css"

const RandomLocation = () => {
    const [locations, setLocations] = useState('')
    
    const getLocation = () => {
        fetch("https://holidaylocatapi.herokuapp.com/locations")
        .then(res => res.json())
        .then(data => {
            let randomLocation = Math.floor(Math.random() * data.length);
            setLocations(data[randomLocation]);
        });
    };


    return (
        <div className="button hidden1" role='hiddenbtn'>
            <p>{locations.Name}</p>
            <img classname="randomimg"src={locations.Img}></img>
            <button className='hidden' id="randomButton" data-testid='randombtn' onClick={getLocation}>Random Location</button>
            
        </div>

    )
};


export default RandomLocation
