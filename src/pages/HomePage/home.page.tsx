import { useEffect, useState } from 'react';
// Components
import PokemonList from '../../components/pokemon-list-component/pokemon.list.component';
// Utils
import { getData } from "../../utils/data.utils";

function HomePage(){

    return (
        <section>
            <PokemonList/>
        </section>
    )
}

export default HomePage;