// Routing
import { Link } from "react-router-dom"

// Styling
import "../../assets/sass/navbar-style-sass/navbar.style.sass"

export default function NavBar(){
    
    return (
        <nav>
            <Link to="/">
                <div id="siteNavTitle"/>
            </Link>
        </nav>
    )
}