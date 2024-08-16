'use client';
import { useState, useEffect } from 'react';
import styles from "../countryButtons/Country-button.module.css";


export default function Countrybutton(){
const selectReviews = () => {
    function selectReviews(name){
        console.log(name);
    }
    return (
        <>
        <section>
          <button onClick={() => selectReviews("England")}> England</button>
          <button onClick={() => selectReviews("Wales")}> Wales</button>
          <button onClick={() => selectReviews("Scotland")}> Scotland</button>
          </section>
      </>
    )
  }};

//   'use client';

// import { useState, useEffect } from 'react';

// export default function Pokemon() {

//     const [ selectedPokemon, setSelectedPokemon ] = useState(null);
//     const [ pokemonData, setPokemonData ] = useState(null);

//     console.log(pokemonData);

//     useEffect(() => {

//         if (selectedPokemon) {
//             fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
//                 .then(response => response.json())
//                 .then(data => setPokemonData(data));
//         }
        
        
//     }, [selectedPokemon]);

//     function selectPokemon(name) {
//         setSelectedPokemon(name);
//     }

//     return (
//         <>
//             <button onClick={() => selectPokemon("charmander")}>Charmander</button>
//             <button onClick={() => selectPokemon("ditto")}>Ditto</button>
//             <button onClick={() => selectPokemon("squirtle")}>Squirtle</button>

//             { JSON.stringify(pokemonData)}
//         </>
//     )
// }

// Flow of the component :)

    // The component renders the first time with null state for "selectedPokemon" and "pokemonData"

    // User clicks a button, that triggers the click handler, that changes "selectedPokemon" state.

    // The component re-renders because "selectedPokemon" has changed.
        // Because the component re-renders, the component's code gets run again.
        // Because our useEffect depends on the "selectedPokemon" state the code in useEffect runs.
        // The useEffect code makes a fetch request to get some data.
        // When the request comes back with some data we change the "pokemonData" state to contain that data.

     // Component re-renders becuase "pokemonData" has changed.