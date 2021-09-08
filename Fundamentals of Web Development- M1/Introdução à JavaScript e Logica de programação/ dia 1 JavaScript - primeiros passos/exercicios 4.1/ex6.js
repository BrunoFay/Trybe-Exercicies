
const peca = ""
switch(peca){
    case "torre":
        console.log("Se movimentam em linha reta ou para os lados, por todas as casas. ");
        break;
    case "rainha":
        console.log("Pode se movimentar para qualquer lado e direção. ");
        break;
    case "rei":   
        console.log("Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.");
        break;
    case "cavalo":
        console.log("Se movimenta em L");
        break;
    case "bispo":
        console.log("Se movimenta somente na diagonal por todo o tabuleiro. ");
        break;
    case "peão":
    case "peao":
        console.log("Só podem se mover uma casa ou duas casas para frente (durante a primeira jogada), e também podem matar na diagonal peças do time adversário. ");
        break;
        default:
            console.log("erro na descrição da peça");    



}