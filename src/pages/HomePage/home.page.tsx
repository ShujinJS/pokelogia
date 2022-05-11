import { useEffect, useState, ChangeEvent } from 'react';
// Utils
import { getData } from "../../utils/data.utils";

function HomePage(){

    const [pokemons, setPokemons] = useState<GetResult>();
    const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
    const [searchBox, setSearchBox] = useState("");

    type GetResult = {
        count: string;
        next: string;
        previous?: string;
        results: [Pokemon]
    }

    type Pokemon = {
        name: string;
        url: string
    }

    const fetchPokemons = async () => {
        const pokemons = await getData<GetResult>("https://pokeapi.co/api/v2/pokemon?limit=30");
        setPokemons(pokemons)
    };

    useEffect(() => {  
        fetchPokemons();
    }, []);

    //const newFilteredPokemons = pokemons.

    useEffect(() => {
        
    })

    console.log(pokemons)

    return (
        <section>
            <h2>
                Pokemons
            </h2>
            <form>
                <input type="text" name="searchBox"/>
            </form>
            <div>
                {pokemons ? pokemons.results.map((pokemon, index) => {return <div key={index}>{pokemon.name}</div>}) : "Loading"}
            </div>
        </section>
    )
}

export default HomePage;