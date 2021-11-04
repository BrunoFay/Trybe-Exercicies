import React from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            nome: '',
            email:'',
            CPF: '',
            endereco:'',
            cidade:'',
            estado:'',
            tipo: '',
            cargo:'',
            Rcurriculo:'',
            Dcargo:'',


        }

    }
    handleChange = ({ target }) => {
        const { name } = target
        this.setState({
            [name]: target.value
        })
    }
    creatDivData =(event)=>{
        event.preventDefault()
    }
    render() {
        return (
           <>
           <fieldset>
                <legend>Dados pessoais</legend>
                <Input type="text" name='nome' handleChange={this.handleChange} placeholder='digite seu nome' />
                <Input type="text" name='email' handleChange={this.handleChange} placeholder='digite seu email' />
                <Input type="text" name='CPF' handleChange={this.handleChange} placeholder='digite seu CPF' />
                <Input type="text" name='endereco' handleChange={this.handleChange} placeholder='digite seu endereço' />
                <Input type="text" name='cidade' handleChange={this.handleChange} placeholder='digite sua cidade' />
              <Select name='estado' handleChange={this.handleChange} />
              <Radio type='Radio' name="casa" name2='apartamento'/>
            </fieldset>
            <fieldset>
            <legend>Dados do seu último emprego</legend>
            <label htmlFor='resumo'>Resumo do currículo</label>
            <textarea id= 'resumo' name='Rcurriculo' onChange={this.handleChange}/>
            <Input type="text" name='cargo' handleChange={this.handleChange} placeholder='digite ultimo cargo' />
            <label htmlFor='Descrição do cargo'>Descrição do cargo</label>
            <textarea id='Descrição do cargo'name ='Dcargo' onChange={this.handleChange}/>
            </fieldset>
            <button type='submit' onClick={this.creatDivData}>formar formulario</button>
            </>
        )
    }
}