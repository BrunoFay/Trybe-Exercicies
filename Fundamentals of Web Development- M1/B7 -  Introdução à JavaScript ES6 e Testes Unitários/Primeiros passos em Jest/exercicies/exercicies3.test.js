const myFizzBuzz = require('./exercicies3');

describe('verificação da função myFizzBuzz',()=>{

it('verifica se o numero é divisivel por 3 e por 5, retornando fizzBuzz',()=>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz'); 
})

it('verifica se o numero é divisivel por 3, retornando fizz',()=>{
    expect(myFizzBuzz(9)).toBe('fizz'); 
})

it('verifica se o numero é divisivel por 5, retornando Buzz',()=>{
    expect(myFizzBuzz(10)).toBe('buzz'); 
})

it('verifica se o numero não é divisivel por 3 e por 5, retornando false ',()=>{
    expect(myFizzBuzz('2')).toBeFalsy(); 
})

it('verifica se o numero não é divisivel por 3 e por 5, retornando ele mesmo ',()=>{
    expect(myFizzBuzz(2)).toBe(2); 
})



})