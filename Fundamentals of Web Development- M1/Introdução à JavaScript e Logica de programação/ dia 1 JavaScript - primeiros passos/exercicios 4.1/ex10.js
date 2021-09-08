const valorVenda = 3420 ;
const valorCusto = 2500;
let impostoSobreOCusto = valorCusto * 0.20;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal; 
if (valorCusto <= 0 || valorCusto == undefined || valorVenda <= 0 || valorVenda == undefined){
    console.log("error");
}
else{
    console.log(lucro);
}