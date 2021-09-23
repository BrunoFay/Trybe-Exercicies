let tamanho = 5;
let espaco = ' ';
let simbolo='*';
let posicao = tamanho;
for (let i = 0;i < tamanho;i+=1)
{
    for(let dois = 0; dois <= tamanho;dois+=1){
        if(dois < posicao){
            espaco = espaco + ' ';
        }
        else{
            espaco= espaco + simbolo
        }
    }
    console.log(espaco);
    espaco = ' ';
    posicao -= 1;
} 