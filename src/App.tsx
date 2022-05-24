import './App.css';
import { useEffect } from "react"
// Routing
import Router from './route/route';
// Components
import NavBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

function App() {

  useEffect(() => {
    document.title = "Pokélogia | A simple pokedex app for training!";

  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
