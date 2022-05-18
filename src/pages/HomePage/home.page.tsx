import { useEffect, useState } from 'react';
// Components
import Header from '../../components/header/header.component';
import PokemonList from '../../components/pokemon-list-component/pokemon.list.component';
// Styling
import "../../assets/css/homepage-style-css/homepage.style.css"


function HomePage(){

    return (
        <section id="homepageContainer">
            <Header/>
            <PokemonList/>
        </section>
    )
}

export default HomePage;