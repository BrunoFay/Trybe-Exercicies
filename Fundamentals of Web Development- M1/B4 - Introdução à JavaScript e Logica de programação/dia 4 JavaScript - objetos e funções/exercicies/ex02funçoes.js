let num =[2, 10, 6, 14, 12, 1]; 
function maiorNumero(arrays) {
    let recebido=0;
 for (let index = 0; index < arrays.length; index++) {
   if (arrays[recebido]< arrays[index]){
       recebido= index;
   }
     
 
        
    }return recebido;
    
}
console.log(maiorNumero(num));