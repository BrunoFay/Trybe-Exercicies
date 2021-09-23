let numeros = [2, 3, 2, 8, 8, 2, 3]; 
function numeroQueRepetido(params) {
    let numerosEmOrdem= params.sort().slice()
    let numeroRepetidos= [];
    for (let index = 0; index < params.length; index+=1) {
        if(numeros[index+1]===params[index]){
            numeroRepetidos.push(params[index])
        }
    } 
    return numeroRepetidos;
}
console.log(numeroQueRepetido(numeros));  