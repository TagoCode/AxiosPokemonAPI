import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Pokecomponent(props) {
    const [pokemon, setPokemon] = useState([]);

    const clickCatch = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=964')
            .then(response => setPokemon(response.data.results))
    }

    return (
        <div>
            <button onClick={clickCatch}>Catch Em' All!</button>
            {pokemon.map((poke, idx) => {
                return (<div key={idx} > {poke.name}</div>)
            })}
        </div>
    )
}

export default Pokecomponent;