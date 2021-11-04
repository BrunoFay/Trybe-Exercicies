import React, { Component } from 'react'


class Form extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            estadoFavorito: '',
            idade: 0,
            vaiComparecer:false,
            select: ''
        };
    }


    handleChange({target}) {
        const {name}= target
        const value =target.type === 'checkbox'?target.checked:target.value;
        this.setState({
            [name]: value,
         
        });
    }
   
    

    render() {
        return (
            <div>
                <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
                <form className="form">
                    <label>
                        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
                        <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
                    </label>
                    <input
                        type="number"
                        name="idade"
                        onChange={this.handleChange}
                    />
                    <input
                        type="checkbox"
                        name="vaiComparecer"
                        onClick={this.handleChange}
                    />
                    <select name='select' onClick={this.handleChange}>
                        <option>choice</option>
                        <option>bill</option>
                        <option>dk47</option>
                        <option>sintese</option>
                    </select>
                    <input type="file" />
                </form>
            </div>
        );
    }
}

export default Form;