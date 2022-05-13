import { useEffect, useState, ChangeEvent } from 'react';
// Utils
import { getData } from "../../utils/data.utils";
import { GetResult, Pokemon } from "../../redux/types/pokemons.types";
// Redux Saga
import { useSelector, useDispatch } from "react-redux";
import rootAction from '../../redux/actions/rootAction';

import PokemonsActions from "../../redux/actions/pokemonsActions"

function PokemonList(){
    const [pokemons, setPokemons] = useState<GetResult>();
    
    const [searchBox, setSearchBox] = useState("");
    
    const pokemonsData = useSelector((state: GetResult) => state.results)

    const dispatch = useDispatch();

    const [filteredPokemons, setFilteredPokemons] = useState<[Pokemon]>(pokemons);

    // const fetchPokemons = async () => {
    //     const pokemons = await getData<GetResult>("https://pokeapi.co/api/v2/pokemon?limit=9999");
    //     setPokemons(pokemons.results)
    // };

    useEffect(() => {  
        //fetchPokemons();
        dispatch(PokemonsActions.getPokemons())
    }, []);

    const newFilteredPokemons = pokemons?.filter((pokemon) => {
        return pokemon.name.toLocaleLowerCase().includes(searchBox);
    })

    useEffect(() => {
        setFilteredPokemons(newFilteredPokemons);
    },[pokemonsData, filteredPokemons])

    console.log(filteredPokemons)
    console.log(pokemonsData)

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchBoxString = event.target.value.toLocaleLowerCase();
        setSearchBox(searchBoxString);
    }

    return (
        <section>
            <h2>
                Pokemons
            </h2>
            <form>
                <input type="text" name="searchBox" onChange={onSearchChange}/>
            </form>
            <div>
                <ul>
                    {filteredPokemons ? filteredPokemons.map((pokemon, index) => {
                        return <li key={index}>{pokemon.name}</li>
                    }) : "Loading"}
                </ul>
            </div>
        </section>
    )
}

export default PokemonList;