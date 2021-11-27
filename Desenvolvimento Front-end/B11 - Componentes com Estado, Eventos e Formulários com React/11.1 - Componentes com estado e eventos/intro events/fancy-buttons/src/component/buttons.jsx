// src/App.js
import React from 'react';



class App extends React.Component {
    constructor() {
        super()
        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this)
        this.state = {
            numeroDeCliquesB1: 0,
            numeroDeCliquesB2: 0,
            numeroDeCliquesB3: 0,
        }
    }
    handleButtonOne() {
        this.setState((lastState, _props) => ({
            numeroDeCliquesB1: lastState.numeroDeCliquesB1 + 1
        }))
    }

    handleButtonTwo() {
        this.setState((lastState, _props) => ({
            numeroDeCliquesB2: lastState.numeroDeCliquesB2 + 1
        }))
    }

    handleButtonThree() {
        this.setState((lastState, _props) => ({
            numeroDeCliquesB3: lastState.numeroDeCliquesB3 + 1
        }))
    }
    evenOurOdd(num) {
        return (num % 2 === 0) ? 'yellow' : 'red'
    }
    render() {
        const {numeroDeCliquesB1,numeroDeCliquesB2,numeroDeCliquesB3} = this.state; 
        return (
            <div>
                <button onClick={this.handleButtonOne} style={{ backgroundColor: this.evenOurOdd(numeroDeCliquesB1) }}>{numeroDeCliquesB1}</button>
                <button onClick={this.handleButtonTwo} style={{ backgroundColor: this.evenOurOdd(numeroDeCliquesB2) }}>{numeroDeCliquesB2}</button>
                <button onClick={this.handleButtonThree} style={{ backgroundColor: this.evenOurOdd(numeroDeCliquesB3) }}>{numeroDeCliquesB3}</button>
            </div>
        );
    }
}

export default App;