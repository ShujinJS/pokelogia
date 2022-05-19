// Routing
import { Link } from "react-router-dom"

// Styling
import "../../assets/css/components-css/navbar-css/navbar.style.css"

export default function NavBar(){
    
    return (
        <nav>
            <Link to="/">
                <div id="siteNavTitle"/>
            </Link>
        </nav>
    )
}