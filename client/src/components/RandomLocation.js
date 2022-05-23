import React, {useEffect, useState} from "react";

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

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <div className="button">
            <p>{locations.Name}</p>
            <img src={locations.Img}></img>
            <button onClick={getLocation}>Random Location</button>
        </div>
    )
};


export default RandomLocation