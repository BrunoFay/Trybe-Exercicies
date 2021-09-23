let n = 5;

function somainteiros(params) {
    let inteiros = 0;
    for (let index = 0; index <= params; index+=1) {
        inteiros+=index
        
    }
    return inteiros
}
console.log(somainteiros(n));