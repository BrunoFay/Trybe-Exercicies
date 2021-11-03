import React from "react";


class Pokemons extends React.Component {
    render() {
        const pokemonsParam = this.props.param;
        return (
            pokemonsParam.map(({image,name,type,averageWeight}) =>

            <>
            <div className="container">
       <div className="card">
           <div className="face face1">
               <div className="content">
               <img src={image} alt={`${name} sprite`} />
                   <h3>{name}</h3>
               </div>
           </div>
           <div className="face face2">
               <div className="content">
               <p>tipo : {type}</p>
                   <p>peso : {averageWeight.value} {averageWeight.measurementUnit}</p>
               </div>
           </div>
       </div>
       
   </div>
           </>


            ))
    }
}



export default Pokemons