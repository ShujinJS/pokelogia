import PokemonDetailComponent from "../../components/pokemondetail-component/pokemondetail.component";
// Styling
import "../../assets/style/pages-style/pokemondetailpage-style/pokemondetailpage.style.css"
import SemiBackground from "../../components/semi-background/semibackgorund.component";

export default function PokemonDetailPage(){

    return (
        <section id="pokemonDetailPage">
            <SemiBackground/>
            <PokemonDetailComponent/>
        </section>
    )
}