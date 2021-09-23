let tamanho = 5;
let espaco = ' ';
let simbolo='*';
let midOfMatrix = (tamanho + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let i = 0;i <= midOfMatrix;i+=1)
{
    for(let dois = 0; dois <= tamanho;dois+=1){
        if(dois > controlLeft && dois < controlRight){
            espaco= espaco + simbolo
        }
        else{
            espaco = espaco + ' ';
        }
    }
    console.log(espaco);
    espaco = ' ';
    controlRight += 1;
    controlLeft -= 1
} 