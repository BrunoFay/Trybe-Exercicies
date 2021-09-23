function arrayOfNumbers(params) {
    let arrayPar=[];
    for (let index = 0; index < params.length; index+=1) {        
        for (let index2 in params[index]) {
            if(params[index][index2]%2==0){
                arrayPar.push(params[index][index2]);
            }
            
        }
       
    }
    return arrayPar;
}
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector))