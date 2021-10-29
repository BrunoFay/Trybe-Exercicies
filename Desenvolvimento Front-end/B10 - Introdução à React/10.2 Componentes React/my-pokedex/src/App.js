import './App.css';
import Pokemons from './pokemon';
import pokemons from './data'
function App() {
  return (
   <main className='card'>
      <h1>Pokedex </h1> 
      <section className='face face1'>
      
      


      <Pokemons className="App" pokemons={pokemons}/>
    </section>

   </main>
    
  );
}

export default App;
