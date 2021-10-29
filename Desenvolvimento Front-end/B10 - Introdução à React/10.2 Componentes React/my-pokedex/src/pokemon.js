import React from "react";


class Pokemons extends React.Component {
    render() {
        const pokemonsParam = this.props.pokemons;
        return (
            pokemonsParam.map((pokemon) =>

            <>
            <div className="container">
       <div className="card">
           <div className="face face1">
               <div className="content">
               <img src={pokemon.image} alt={`${pokemon.name} sprite`} />
                   <h3>{pokemon.name}</h3>
               </div>
           </div>
           <div className="face face2">
               <div className="content">
               <p>tipo :{pokemon.type}</p>
                   <p>peso :{pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
               </div>
           </div>
       </div>
       
   </div>
           </>


            ))
    }
}



export default Pokemons