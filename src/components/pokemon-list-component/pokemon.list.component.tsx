import { useEffect, useState, ChangeEvent } from 'react';
// Redux Saga
import { useSelector, useDispatch } from "react-redux";
import PokemonsActions from "../../redux/actions/pokemonsActions"
// TS Types
import { RootState, Pokemon } from "../../redux/types/pokemons.types"


function PokemonList(){

    const pokemonsData = useSelector((state: RootState) => state.rootState.pokemonList)
    const dispatch = useDispatch();

    const [pokemons, setPokemons] = useState<Pokemon[]>()
    const [searchBox, setSearchBox] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>();

    const newFilteredPokemons = pokemons?.filter((pokemon: Pokemon) => {
        return pokemon.name.toLocaleLowerCase().includes(searchBox);
    })

    useEffect(() => {  
        dispatch(PokemonsActions.getPokemons())
    }, []);

    useEffect(() => {
        setPokemons(pokemonsData.results)
    },[pokemonsData])

    useEffect(() => {
        setFilteredPokemons(newFilteredPokemons);
    },[pokemons])

    useEffect(() => {

    }, [filteredPokemons, newFilteredPokemons])

    console.log(newFilteredPokemons)

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchBoxString = event.target.value.toLocaleLowerCase();
        setSearchBox(searchBoxString);
    }

    return (
        <section id="searchArea">
            <div className="search-container">
                <form>
                    <div id="searchBar">
                        <input type="search" onChange={onSearchChange} placeholder="Search your pokémon..."/>
                        <span/>
                    </div>
                </form>
                <div id="resultArea">
                    <ul>
                        {newFilteredPokemons ? newFilteredPokemons.map((pokemon, index) => {
                            return <li key={index}>{pokemon.name}</li>
                        }) : "Loading"}
                    </ul>
                </div>
                <div id="firstGenSquad"/>
            </div>
        </section>
    )
}

export default PokemonList;