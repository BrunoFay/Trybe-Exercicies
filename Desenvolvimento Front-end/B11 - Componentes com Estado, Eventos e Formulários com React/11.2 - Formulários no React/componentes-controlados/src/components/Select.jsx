import React from "react";

export default class Select extends React.Component {
    render() {
        const{name, handleChange}=this.props
        return (
            <select name={name} onClick={handleChange}>
                <option>choice</option>
                <option>bill</option>
                <option>dk47</option>
                <option>sintese</option>
            </select>
        )
    }
}