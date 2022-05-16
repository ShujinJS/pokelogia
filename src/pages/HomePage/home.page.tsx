import { useEffect, useState } from 'react';
// Components
import Header from '../../components/header/header.component';
import PokemonList from '../../components/pokemon-list-component/pokemon.list.component';
// Styling
import "../../assets/sass/homepage-sass/homepage.style.sass"


function HomePage(){

    return (
        <section id="homepageContainer">
            <Header/>
            <PokemonList/>
        </section>
    )
}

export default HomePage;