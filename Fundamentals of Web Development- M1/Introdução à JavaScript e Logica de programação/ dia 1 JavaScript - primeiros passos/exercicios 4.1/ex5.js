const anguloLadoA = 55  
const anguloLadoB = 65 
const anguloLadoC = 60
if (anguloLadoA + anguloLadoB +anguloLadoC == 180){
    console.log(true);
}
else if (anguloLadoA == undefined || anguloLadoB == undefined || anguloLadoC == undefined ){
    console.log("error verifique os valores");
} 
else{
    console.log(false);
}