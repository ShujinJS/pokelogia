// Routing
import { Link } from "react-router-dom"

// Styling
import "../../assets/style/components-style/navbar-style/navbar.style.css"

export default function NavBar(){
    
    return (
        <nav>
            <Link to="/">
                <div id="siteNavTitle"/>
            </Link>
        </nav>
    )
}