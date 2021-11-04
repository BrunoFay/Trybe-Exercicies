import React, { Component } from 'react'


class Form extends Component {
    constructor() {
        super();

        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleChangeInputIdade = this.handleChangeInputIdade.bind(this);
        this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.state = {
            estadoFavorito: '',
            inputIdade: 0,
            vaiAparecer:false,
            select: ''
        };
    }


    handleChangeTextArea(event) {
        this.setState({
            estadoFavorito: event.target.value,
        });
    }
    handleChangeInputIdade(event){
        this.setState({
            inputIdade: event.target.value,
            
        })
    }
    
    handleChangeCheckBox(event){
        this.setState({
            vaiAparecer: event.target = true
            
        })
    }
    
    handleChangeSelect(event){
        this.setState({
            select: event.target.value,
            
        })
    }
    

    render() {
        return (
            <div>
                <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
                <form className="form">
                    <label>
                        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
                        <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChangeTextArea} />
                    </label>
                    <input
                        type="number"
                        name="idade"
                        onChange={this.handleChangeInputIdade}
                    />
                    <input
                        type="checkbox"
                        name="vaiComparecer"
                        onClick={this.handleChangeCheckBox}
                    />
                    <select  onClick={this.handleChangeSelect}>
                        <option>choice</option>
                        <option>bill</option>
                        <option>dk47</option>
                        <option>sintese</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Form;