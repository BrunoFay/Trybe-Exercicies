let resultadoProcessoSeletivo = "aprovada"
switch (resultadoProcessoSeletivo){
    case "aprovada":
        console.log("parabens, vc esta na trybe");
        break;
    case "reprovada":
        console.log("vc pode tentar novamente em 1 mes");
        break;
    case "lista":
        console.log("vc esta na lista de espera");
        break;
        default:
            console.log("nao se aplica");        
}