// Routing
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "../pages/HomePage/home.page";
import PokemonDetailPage from "../pages/PokemonDetailPage/pokemondetail.page";

// Styling
import "../assets/style/route-style/route.style.css"

export default function Router(){
    return (
        <div id="siteRouter">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pokemon/:name" element={<PokemonDetailPage/>}/>
            </Routes>
        </div>
    )
}