import { useState, useEffect } from "react"
// Redux Saga
import { useSelector } from "react-redux";
// TS Types
import { RootState } from "../../redux/types/pokemons.types"
// Styling
import "../../assets/style/components-style/pokemondetail-style/pokemondetail.style.css"

export default function PokemonDetailComponent(){

    const myPokemon = useSelector((state: RootState) => state.rootState.selectedPokemon)

    let pokemonImage;
 
    if(myPokemon.sprites!==undefined) pokemonImage = myPokemon.sprites.front_default

    const pokemonStyle = {
        height: "250px",
        backgroundImage: `url('${pokemonImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    return (
        <div className="pokemon-detail-container">
            <div className="pokemon-detail-header pokemon-detail-row text-white">
                <div className="flex justify-evenly">
                    <div className="flex flex-col content-around">
                        <div>
                            <span className="text-xl text-white">{myPokemon.name}</span>
                            <span className="text-emerald-100">#{myPokemon.id}</span>
                        </div>
                        <div className="pt-2 pb-2 font-bold">
                            {myPokemon.types ? myPokemon.types.map((type, index) => <span key={index} className={`${type.type.name}-type pokemon-detail-type mr-2`}>{type.type.name}</span>) : ""}
                        </div>
                        <div className="flex flex-col">
                            <span>Height: {myPokemon.height}</span>
                            <span>Base Exp: {myPokemon.base_experience}</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700">Abilities:</span>
                            <ul className="flex">
                                {myPokemon.abilities ? myPokemon.abilities.map((ability, index) => <li key={index} className="mr-2">{ability.ability.name}</li>) : ""}
                            </ul>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700">Stats:</span>
                            <div className="flex">
                                <ul className="mr-3">
                                    <li>hp</li>
                                    <li>attack</li>
                                    <li>defense</li>
                                    <li>special attack</li>
                                    <li>special defense</li>
                                    <li>speed</li>
                                </ul>
                                <ul>
                                    {myPokemon.stats ? myPokemon.stats.map((stat, index) => <li key={index} className={stat.base_stat < 70 ? "text-rose-700" : "text-lime-400"}>:  {stat.base_stat}</li>) : ""}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pokemon-avatar">
                        {myPokemon.sprites!==undefined ? 
                        <div style={pokemonStyle}/>
                        : <div/>}
                    </div>
                </div>
                
            </div>
            <div className="bg-black text-white p-4 flex justify-center">
                <span className="pokeball-btn">Moves</span>
            </div>
            <div className="overflow-auto h-1/2">
                <table className="w-full">
                    <tbody>
                        {myPokemon.moves ? myPokemon.moves.map((move, index) => <tr><td key={index} className={index%2 == 0 ? "bg-white p-2 text-sm" : "bg-zinc-300 p-2 text-sm"}>{move.move.name}</td></tr>) : <tr/>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}