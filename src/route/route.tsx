// Routing
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "../pages/HomePage/home.page";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
}