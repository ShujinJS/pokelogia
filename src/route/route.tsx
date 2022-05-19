// Routing
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "../pages/HomePage/home.page";
import PokemonPage from "../pages/PokemonPage/pokemon.page";

// Styling
import "../assets/sass/route-style-sass/route.style.sass"

export default function Router(){
    return (
        <div id="siteRouter">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pokemon/:name" element={<PokemonPage/>}/>
            </Routes>
        </div>
    )
}