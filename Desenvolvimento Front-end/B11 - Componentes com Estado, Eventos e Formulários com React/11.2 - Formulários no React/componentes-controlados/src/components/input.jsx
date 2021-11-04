import React from "react";

export default class Input extends React.Component{
    render(){
        const{type,name,handleChange}=this.props;
        return(
            <input
            type={type}
            name= {name}
            onChange={handleChange}
        />
        )
    }
}