import "../../assets/css/components-css/header-css/header.style.css"
export default function Header(){

    return (
        <header id="homepageHeader">
            <div id="headerTitle"/>
            <div className="header-group">
                <h1 className="text-2xl">
                    Welcome, Pokémon trainers!
                </h1>
                <span>You may search for your favourites pokémons of every generations. You can study their evolutions, abilities, movesets and more!</span>
                <span><br/>Simply start using by typing your pokémon's name below!</span><br/>
                <span>Happy training...</span>
            </div>
        </header>
    )
}