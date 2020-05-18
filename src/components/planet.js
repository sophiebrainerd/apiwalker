import React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const PlanetComponent = (props) => {
    const [name, setName] = useState("");
    const [climate, setClimate] = useState("");
    const [terrain, setTerrain] = useState("");
    const [surface_water, setSurface_water] = useState(false);
    const [population, setPopulation] = useState("");

    useEffect(() => {axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response=>{setName(response.data.name);
                            setClimate(response.data.climate);
                            setTerrain(response.data.terrain);
                            setSurface_water(response.data.surface_water);
                            setPopulation(response.data.population)})
                            .catch(err => console.log(err))
                            }, [props]);

    return (
        <>
            <h1>Name: {name}</h1>
            <p>Climate: {climate}</p>
            <p>Terrain: {terrain}</p>
            <p>Surface Water: {surface_water}</p>
            <p>Population: {population}</p>
        </>
    )
    
}

export default PlanetComponent;