'use client';
import { useState, useEffect } from 'react';
import styles from "../countryButtons/Country-button.module.css";


export default function CountryButton() {
    const [ selectedCountries, setSelectedCountries ] = useState(null);
    const [reviewData, setReviewData ] = useState(null);

    useEffect(() => {

      if(selectedCountries) {
        //fetch data here
        fetch("https://seal-app-336e8.ondigitalocean.app/reviews?country=England")
        .then(response => response.json())
        .then(data => setReviewData(data));
      }
    }, [selectedCountries]);


    function selectReviews(name) {

      setSelectedCountries(name);
    }
    console.log(selectReviews)

    return (
        <>
                <button onClick={() => selectReviews("England")}> England</button>
                <button onClick={() => selectReviews("Wales")}> Wales</button>
                <button onClick={() => selectReviews("Scotland")}> Scotland</button>

                { JSON.stringify(reviewData)}
                {}
        </>
    );
}

//pseudocode
//to style basic button
//to be able to click a button which turns orange which opens another display
// //this display has fetched API data from users:{
//   "text": "We couldn't be happier with our new fireplace - Mike and Mandy came recommended but we were still blown away by the quality of service. 😊 🏆",
//   "author": "Amy Mcdonald",
//   "location": "Inverness",
//   "businessName": "Fireplace Palace"
// }

//


// Flow of the component :)

    // The component renders the first time with null state for "selectedPokemon" and "pokemonData"

    // User clicks a button, that triggers the click handler, that changes "selectedPokemon" state.

    // The component re-renders because "selectedPokemon" has changed.
        // Because the component re-renders, the component's code gets run again.
        // Because our useEffect depends on the "selectedPokemon" state the code in useEffect runs.
        // The useEffect code makes a fetch request to get some data.
        // When the request comes back with some data we change the "pokemonData" state to contain that data.

     // Component re-renders because "pokemonData" has changed.