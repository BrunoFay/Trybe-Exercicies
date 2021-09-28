const sum = require('./exercicies');
describe ('verificações função sum',() =>{
it('verifica se 4 + 5 é igual a 9',() =>{
    expect(sum( 4, 5 )).toBe(9); 
});

it('verifica se 0 + 0 é igual a 0',() =>{
    expect(sum( 0, 0 )).toBe(0); 
});

it(`verifica se a função volta um erro quando colocado 4 + "5"`,() =>{
    expect(() => sum( 4, '5' )).toThrowError('parameters must be numbers'); 
  
});

it(`verifica se a função volta um erro quando colocado 4 + "5"`,() =>{
    expect(() => sum( 4, '5' )).toThrowError(); 
  
})
})