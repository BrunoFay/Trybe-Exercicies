let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total= 0;
for(let soma = 0;soma < numbers.length;soma += 1){
    
    total += numbers[soma]
   
  
    
}
if (total > 20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}