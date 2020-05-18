import React from 'react';
import { Router} from '@reach/router';
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import PersonComponent from './components/person.js';
import PlanetComponent from './components/planet.js';
import Search from './components/Search';

function App() {

    const [responseData, setResponseData] = useState(null);
    const [typeInput, setTypeInput] = useState("");
    const [idInput, setIdInput] = useState("");


    const handleSearch = (typeInput, idInput) => {
        axios.get(`https://swapi.dev/api/${typeInput}/${idInput}/`)
        .then(response => {setResponseData(response.data)})
        .catch(err => console.log(err));
    }    


    return (

        <div>    
            <div>
                <h1>Yay Star Wars!</h1>
            </div>
            <Search search={handleSearch}/>       
            <div>
                <Router>
                    <PersonComponent path="/people/:id"/>
                    <PlanetComponent path="/planets/:id"/>
                </Router>
            </div>
            
        </div>
        
    );
}

export default App;
