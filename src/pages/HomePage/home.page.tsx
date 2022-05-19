import { useEffect, useState } from 'react';
// Components
import Header from '../../components/header/header.component';
import PokemonList from '../../components/pokemonlist-component/pokemonlist.component';
// Styling
import "../../assets/css/pages-css/homepage-css/homepage.style.css"


function HomePage(){

    return (
        <section id="homepageContainer">
            <Header/>
            <PokemonList/>
        </section>
    )
}

export default HomePage;