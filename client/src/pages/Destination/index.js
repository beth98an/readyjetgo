import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Destination() {
    const ans = useSelector(state => state.answers)
    const [destinations, setDestinations] = useState([])
   
    let filtered = []

    useEffect(() => {
        axios.get('https://holidaylocatapi.herokuapp.com/locations')
        .then(resp => setDestinations(resp.data.map(d => d)))
    }, [])

    console.log(destinations)
    for (let i=0; i< destinations.length; i++){
        // console.log(destinations[i])
        if (destinations[i].Continent === ans.ans2){
            // console.log(destinations[i])
            if(destinations[i].cityBeach === ans.ans1){
                console.log(destinations[i])
                let dest = destinations[i]
                console.log('a', dest)
                filtered.push(destinations[i])
            }
        }
    }
    console.log(ans)
    console.log(filtered)

    const random_int = (list)=> {
        let num = Math.floor(Math.random()* list.length)
        console.log(num)
        return num
    }
    
    let finalList = []
    for (let i=0; i<3; i++){
        if (!finalList.indexOf(filtered[random_int(filtered)])){}
        finalList.push(filtered[random_int(filtered)])
        console.log(finalList)
    }

    const places = (list) =>{
        return list.map((p, index) => <div key={index}>
            <h1>{p.Name}, {p.Country}</h1>
            <img alt={p.Name} src={p.Img}></img>
        </div>)
    }

  return (
    <div>
        <h1>Here are you options for destinations!</h1>
        <p>Click to choose</p>
        {places(finalList)}
    </div>
  )
}

export default Destination
