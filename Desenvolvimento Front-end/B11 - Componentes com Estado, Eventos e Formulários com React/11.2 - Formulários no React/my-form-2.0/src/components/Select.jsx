import React from "react";
const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
export default class Select extends React.Component{
    render(){
        const {name,handleChange}= this.props;
        return(
            <select  name={name} onClick={handleChange} >
                {states.map((state,index)=> <option key={index}>{state}</option>)}
            </select>
        )
    }
}