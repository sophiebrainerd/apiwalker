import React, { useState } from 'react';
import { navigate } from '@reach/router';

const Search = (props) => {
    const [typeInput, setTypeInput] = useState('people');
    const [idInput, setIdInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${typeInput}/${idInput}`)
    }

return (
    <div>
                <form onSubmit= {handleSubmit}>
                    <label for="type">Search for:</label>
                    <select value={typeInput} onChange= { (e) => setTypeInput(e.target.value)} id="type" name="type">
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <label for="id">ID:</label>
                    <input value={idInput} onChange = { (e) => setIdInput(e.target.value)} type="text" id="id" name="id"/>
                    <button type="submit">Search</button>
                </form>
            </div>   

)
}

export default Search;