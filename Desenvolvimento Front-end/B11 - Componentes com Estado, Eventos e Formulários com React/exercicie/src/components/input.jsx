import React from "react";

export default class Input extends React.Component{
    constructor(){
       super()
        this.state={
            inputValue:'',
            contador:0
        }
        this.input = this.input.bind(this);
        this.counter = this.counter.bind(this)
    }
    counter(){
        this.setState(state => ({
            contador: state.contador + 1
        }))
    }
    input(event){
        this.setState={
            inputValue: event.target.value 
        }
    }
    render(){
        return(
            <>
            <input type='text' onChange={this.input}/>
            <button onClick={this.counter}>contador</button>
            <div>{this.state.contador}</div>
        </>
        )
    }
}