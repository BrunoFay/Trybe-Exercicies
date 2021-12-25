const Redux = require('redux');

//criar o state 
const reducer = (state ={name:'bruno',salary:6000}) => {
    return state;
    };
 // setar o state no store
    const store = Redux.createStore(reducer);
 // obter o state
 const currentState = store.getState()
 console.log(currentState);