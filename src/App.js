import './App.css';
import Pokedex from './Pokedex'
import list from './pokemonlist';
function App() {
  console.log(list)
  return (
    <> 
    <Pokedex list = {list} />     
    </>
  );
}

export default App;
