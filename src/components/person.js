import React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const PersonComponent = (props) => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [hair_color, setHair_color] = useState("");
    const [eye_color, setEye_color] = useState("");
    const [skin_color, setSkin_color] = useState("");

    useEffect(() => {axios.get(`https://swapi.dev/api/people/${props.id}`)
        .then(response=>{setName(response.data.name);
                        setHeight(response.data.height);
                        setHair_color(response.data.hair_color);
                        setEye_color(response.data.eye_color);
                        setSkin_color(response.data.skin_color)})
                        .catch(err => console.log(err))
                        }, [props]);

    return (
        <>
            <h1>{name}</h1>
            <p>Height: {height}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Skin Color: {skin_color}</p>
        </>
    )
}


export default PersonComponent;