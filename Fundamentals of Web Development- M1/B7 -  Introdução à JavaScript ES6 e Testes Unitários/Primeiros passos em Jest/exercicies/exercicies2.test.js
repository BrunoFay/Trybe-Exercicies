const myRemove = require('./exercicies2')

describe ('verifica a função myRemove',()=>{
    it('verifica se o valor 3 é removido do array [1, 2, 3, 4] ',() =>{
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]); 
    });
    
    it('verifica se retorna o array [1, 2, 3, 4], após remover o numeor 3 ',() =>{
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]); 
    });
    
    it('verifica se retorna o array  [1, 2, 3, 4], após verificar que o numero 5 nao existe dentro do mesmo ',() =>{
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]); 
    });

})