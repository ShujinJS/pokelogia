import { useEffect, useState, ChangeEvent, MouseEvent } from 'react';
// Redux Saga
import { useSelector, useDispatch } from "react-redux";
import PokemonsActions from "../../redux/actions/pokemonsActions"
// TS Types
import { RootState, Pokemon, PickedPokemon } from "../../redux/types/pokemons.types"


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

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchBoxString = event.target.value.toLocaleLowerCase();
        setSearchBox(searchBoxString);
    }

    const onClickDetail = (event: MouseEvent<HTMLLIElement>): void => {
        const {target} = event
        const pokemonUrl = (target as HTMLLIElement).getAttribute("data-url");
        console.log(pokemonUrl)
        //dispatch(PokemonsActions.setPokemonDetail(pokemonUrl))
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
                            return <li key={index} data-url={pokemon.url} onClick={onClickDetail} className="pokemon-item">{pokemon.name}</li>
                        }) : "Loading"}
                    </ul>
                </div>
            </div>
            <div id="firstGenSquad"/>
        </section>
    )
}

export default PokemonList;