import { useEffect, useState, ChangeEvent, MouseEvent } from 'react';
// Redux Saga
import { useSelector, useDispatch } from "react-redux";
import PokemonsActions from "../../redux/actions/pokemonsActions"
// TS Types
import { RootState, Pokemon } from "../../redux/types/pokemons.types"
// Routing
import { useNavigate } from "react-router-dom";

function PokemonList(){
    // Saga
    const pokemonsData = useSelector((state: RootState) => state.rootState.pokemonList)
    const dispatch = useDispatch();

    const [searchBox, setSearchBox] = useState("");

    let newFilteredPokemons = pokemonsData.results?.filter((pokemon: Pokemon) => {
        return pokemon.name.toLocaleLowerCase().includes(searchBox);
    })

    // Routing
    const navigate = useNavigate();
    const routeChange = ( name: string | null ) => {
    let path : string = `/pokemon/${name}`;
        navigate(path);
    }

    useEffect(() => {  
        dispatch(PokemonsActions.getPokemons())
    }, []);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchBoxString = event.target.value.toLocaleLowerCase();
        setSearchBox(searchBoxString);
    }

    const onClickDetail = (event: MouseEvent<Element>): void => {
        const {target} = event
        const pokemonUrl = (target as Element).getAttribute("data-url");
        const pokemonName = (target as Element).getAttribute("data-name")
        if(pokemonUrl)dispatch(PokemonsActions.getPokemonDetail(pokemonUrl))
        if(pokemonName)routeChange(pokemonName)
    }

    return (
        <section id="searchArea">
            <div className="search-container">
                <form>
                    <div id="searchBar">
                        <input type="search" onChange={onSearchChange} placeholder="Search your pokémon..."/>
                        <div/>
                    </div>
                </form>
                <div id="resultArea">
                    <ul>
                        {newFilteredPokemons ? newFilteredPokemons.map((pokemon, index) => {
                            return <li key={index} data-name={pokemon.name} data-url={pokemon.url} onClick={onClickDetail} className="pokemon-item">{pokemon.name}</li>
                        }) : "Loading"}
                    </ul>
                </div>
            </div>
            <div id="firstGenSquad"/>
        </section>
    )
}

export default PokemonList;