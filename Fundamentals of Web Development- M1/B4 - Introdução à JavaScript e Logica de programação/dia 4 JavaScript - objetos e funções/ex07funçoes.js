let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(params) {
    let evennumbers=[]
    for (let index = 0; index < params.length; index+=1) {
        
    if(params[index]% 2 == 0){
        evennumbers.push(params[index])
    }
    }return evennumbers;
}console.log(arrayOfNumbers(vector));